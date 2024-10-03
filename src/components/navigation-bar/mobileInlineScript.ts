export const mobileInlineScript = `
const burger = document.querySelector(".burger");
const menuMobile = document.querySelector(".menu-mobile");
function toggleMenuMobile() {
       menuMobile?.classList.toggle("is-active")
}
burger?.addEventListener("click", toggleMenuMobile)
`
