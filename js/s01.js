let buttonRecent = document.getElementsByClassName('button_recent');
buttonRecent.addEventListener('click',showRecentList);


function showRecentList () {
    let recentList = document.querySelector('recent_list')
    if(recentList.style.display = 'block') {
        recentList.style.display = "none";
    } else {
        recentList.style.display = 'block'
    }
}
