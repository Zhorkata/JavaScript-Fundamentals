function loadingBar(percent) {
    let percentCount = percent / 10;//3
    let dotCount = 10 - percent / 10;//7
    if (percent === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${percent}% [${'%'.repeat(percentCount)}${'.'.repeat(dotCount)}]`);
        console.log('Still loading...');
    }
}
loadingBar(30)
