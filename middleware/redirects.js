export default function(req, res, next) {
  const redirects = [
    {
      from: "/admin",
      to: "https://api.skillline.ru/admin"
    },
    {
      from: "/services/development/",
      to: "/services/web-development"
    } ,
    {
      from: "/services/support/",
      to: "/services/technical-support"
    },
    {
      from: "/services/mobile/",
      to: "/services/mobile-development"
    },
    {
      from: "/services/online-marketing/",
      to: "/services/marketing"
    },
    {
      from: "/services/design/",
      to: "/services/web-development"
    },
    {
      from: "/services/bitrix24/",
      to: "/services/bitrix24"
    },
    {
      from: "/upload/iblock/f7c/f7cce9d99efa0ba2b4cbc5d6776d4292.jpg",
      to: "https://api.skillline.ru/storage/2023/08/28/c16ee2d7154d574ecc0d928cd0ee11f249a7f7cd.webp"
    },
    {
      from: "/upload/iblock/7ff/7ffd367c7b22130ca07f1e37b6e7fbec.jpg",
      to: "https://api.skillline.ru/storage/2023/08/28/572993435d5313416fca758ca7869c6b2e592c4e.webp"
    },
    {
      from: "/upload/iblock/659/65996c0c888caa27fa4899b255a38f41.jpg",
      to: "https://api.skillline.ru/storage/2023/08/28/e6559a26a7959de940162a5c481cc47f832f7765.webp"
    },
    {
      from: "/upload/iblock/524/524c17c4ea3ddd6a31bbe7299e872690.jpg",
      to: "https://api.skillline.ru/storage/2023/09/03/b87d86c9f4a2c6894150ffd4fb4de54afd4b6328.webp"
    }
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
