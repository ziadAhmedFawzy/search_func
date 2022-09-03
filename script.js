// funct to search

let searchIndex = (string , char) => {
    let result = 0
    for(let i = 0; i < 1000; i++)
    {
        if(typeof string[i] == "string")
        {
            result = i + 1;
        }
    }
    for(let i = 0; i < result; i++)
    {
        if(string[i] == char)
        {
            console.log(i);
        }
    }
};

searchIndex('ziad' , "i");

let btn = document.getElementById('go');

btn.onclick = function() {
    window.location.href = "https://ziadahmedfawzy.github.io/acsess_func/";
}