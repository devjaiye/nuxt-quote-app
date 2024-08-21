export default defineEventHandler((event) =>{
    console.log("New Request ", event.req.url )
    // console.log('Middleware', to.params.id)
    // useState('routeParamId', () => to.params.id)
})
