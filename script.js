if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(sw =>{
        console.log(`Service Worker Registered`);
    }).catch(err=>{
        console.log(`Service worker registration failed`);
    })
}else {
    console.log(`Service Workers are not supported in this browser`);
}