<template>
  <div class="total__inner-graphic">
    <client-only>
      <highchart class="total__inner-graphic-main" :options="chartOptions" :update="['options.series', 'options.yAxis', 'options.xAxis']" />
    </client-only>
  </div>
</template>

<script>
import {ru} from 'date-fns/locale'
import {differenceInDays, differenceInYears, differenceInCalendarMonths, format, parse} from "date-fns"
export default {
  name: "GraphicTotal",
  props: {
    graphic: {
      type: Array,
      required: true
    },
  },
  computed: {
    categoriesDate() {
      const getDates = this.graphic.reduce((accum, seria) => {
        seria.list.forEach(item => {
          // format DATE
          const date = new Date(item?.date) || null;
          if (date) {
            const dateFormat = format(date, 'yyyy/MM');
            accum.add(dateFormat);
          }
        });
        return accum;
      }, new Set);
      const dates = [...getDates].map(el => parse(`${el}`, 'yyyy/MM', new Date()));
      return  dates.sort((a, b) => differenceInDays(a, b));
    },

    categoriesXAxis() {
     const categories = this.categoriesDate;
      if (!categories.length) {
        return [];
      }
      if (differenceInYears(categories[categories.length - 1], categories[0]) > 0) {
        return categories.map(item => format(item, 'LLLL yyyy', {locale: ru }));
      }

      return categories.map(item => format(item, 'LLLL', {locale: ru }));
    },
    seriesGraphic() {
      return this.graphic.map(item => {
        const dataSeries = item.list?.map((element) => {
          const dateElement =  element?.date || null;
          const xPosition = this.categoriesDate.findIndex((item) => differenceInCalendarMonths(item , dateElement) === 0);

          return {
            x: xPosition >= 0 ? xPosition : null,
            y: element.value || null
          }
        }) || [];

        dataSeries.sort( (a, b) => a.x - b.x);

        return {
          name: item.title,
          type: 'spline',
          data: dataSeries,
          color: item.color || this.getColorSeries(item.code),
        }
      });
    },
    chartOptions() {
      // const heightChart = (9 / 16 * 100) + '%';
      return {
        chart: {
          backgroundColor: 'transparent',
          className: 'TotalGraphic',
          type: "spline",
          // height: heightChart,
          scrollablePlotArea: {
            scrollPositionX: 1,
            // minWidth: countXAxis * 60,
          },
        },
        title: {
          text: "",
        },
        plotOptions: {
          spline: {
            lineWidth: 2,
            showInLegend:true,
          }
        },
        yAxis: {
          title: {
            text: ""
          },
          gridLineDashStyle: 'LongDash',
          gridLineColor: 'var(--chart-line)',
          labels: {
            style: {
              color: 'var(--grafic-axis-text)',
              fontSize: '0.85rem',
            },
            x: -30
          }

        },
        xAxis: {
          categories: this.categoriesXAxis.map(el => el.toUpperCase()),
          labels: {
            style: {
              color: 'var(--grafic-axis-text)',
              fontSize: '0.85rem',
            },
            y: 40,
          },
          gridLineWidth: 0,
          lineWidth: 0,
        },
        legend: {
          align: 'left',

          enabled: true,
          itemStyle: {
            fontSize: '0.85rem',
            fontWeight: '500',
            color: 'var(--chart-text)',
          },
          itemHoverStyle: {
            color: 'var(--chart-text-hover)',
          },
          margin: 55,
          padding: 0,
          squareSymbol: false,
          symbolRadius: 0,
          symbolWidth: 48,
          symbolHeight: 12,
          verticalAlign: 'top',
        },
        tooltip: {
          outside: true,
          formatter() {
            const offsetY = 10;
            const series = this.series.chart.series;

            const dotsCross = [];
            series.forEach((el) => {
              const indexes = el.processedXData.reduce( (accum, x, index) => {
                if (x === this.point.x) {
                  accum.push(index);
                }
                return accum;
              }, [])
              if (indexes.length >= 0) {
                indexes.forEach(i => {
                  const yPoint = el.yData[i];
                  if (yPoint <= this.point.y + offsetY &&  yPoint >= this.point.y - offsetY) {
                    dotsCross.push({
                      name: el.name,
                      color: el.color,
                      y: yPoint
                    });
                  }
                })

              }
            })
            return `<span style="font-size: 0.75rem;line-height: 1rem; color: var(--main-color);width: 100%; display: block;margin-bottom: 0.5rem; text-align: center">${this.x}</span>
${dotsCross.map((el) => '<span style="font-size: 0.85rem; color: var(--main-color);display: block;margin-top: 5px;"><span class="test" style="display: inline-block;width: 0.75rem;height: 0.75rem;vertical-align: middle; margin-right: 0.25rem;background:' + el.color + '"></span>' + el.name + ':' + el.y + ' ч.</span>').join('')}`;
          },
          useHTML: true,
        },
        series: this.seriesGraphic
      }
    }
  },
  methods: {
    getColorSeries(code) {
      if (code === 'front') {
        return 'var(--color-front)';
      }
      if (code === 'back') {
        return 'var(--color-back)';
      }
      if (code === 'design') {
        return 'var(--color-design)';
      }
      if (code === 'test') {
        return 'var(--color-test)';
      }
      return 'var(--chart-text-hover)'
    }
  }
}
</script>

<style scoped>

</style>
