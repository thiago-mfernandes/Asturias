import { css } from "styled-components"

export function handleBackroundImage(pathname: string) {
  switch(pathname){
    case '/about':
      return css`background-image: url("/assets/background/bible.jpg");`
    case '/schedule':
      return css`background-image: url("/assets/background/calendar.jpg");`
    case '/schedule/[id]':
      return css`background-image: url("/assets/background/calendar.jpg");`
    case '/giving':
      return css`background-image: url("/assets/background/offering.jpg");`
    case '/ministries':
      return css`background-image: url("/assets/background/ministries.jpg");`
    case '/faq':
      return css`background-image: url("/assets/background/faq.jpg");`
    case '/contact':
      return css`background-image: url("/assets/background/contact.jpg");`
    case '/contact/[id]':
      return css`background-image: url("/assets/background/contact.jpg");`
    case '/login':
      return css`background-image: url("/assets/background/login.jpg");`
    case '/devotional':
      return css`background-image: url("/assets/background/devotional.jpg");`
    case '/devotional/[id]':
      return css`background-image: url("/assets/background/devotional.jpg");`
    default:
      return css`background-image: url("/assets/background/lost.jpg");`
  }
}
