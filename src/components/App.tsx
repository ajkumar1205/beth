export const App = () => (
    <h1 class="text-3xl text-center text-orange-700 cursor-pointer"
        hx-get="/response"
        hx-trigger="click"
        hx-swap="innerHtml"
    >
        Hello World
    </h1>
)