$(document).ready(() => {
    listenToFormSubmitEvent()
    listenToInputEvent()
})

const listenToInputEvent = ()=>{
    
}

const listenToFormSubmitEvent = () => {
    const formElement = $(".article-search-form");
    formElement.on("submit", async event => {
        event.preventDefault()
        var searchText = $('.article-search-form__input').val();

        var search = ()=>{ return $.ajax({
            url:'https://en.wikipedia.org/w/api.php',
            type:'POST',
            data:{
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(searchText)
            },
            // success:function(res){
            //     return res;   
            // }
        })}     

        const data = await search();
        $('.article-search-form__input').html("")

        var doms = "";
        for(let i = 0;i < data.query.search.length;i++){
            console.log("abc" + i);
            doms += `<a href="https://en.wikipedia.org/?curid=${data.query.search[i].pageid}" target="_blank"
            class="article-view">
            <h3 className="article-view__title">${data.query.search[i].title}</h3>
            <p className="article-view__snippet">${data.query.search[i].snippet}</p>
            </a>`;
        }

        $(".article-list").html(doms);

        /**
         * TODO:
         *  - Lấy từ khoá search của người dùng
         *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
         *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
         *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
         */

    })
}