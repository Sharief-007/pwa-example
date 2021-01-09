let resources = [   "./",
                    "./style.css",
                    "./script.js",
                    //"./imgs/vaadin.png",
                    "./imgs/kotlin.png",
                    "./imgs/springboot.png" ]

self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(resources);
        }).catch(err=>{
            console.log(`Error Storing  files in Cache`);
        })
    )
})


self.addEventListener("fetch",event =>{
    event.respondWith(
        caches.match(event.request).then(res =>{
            return res || fetch(event.request)
        })
    )
})