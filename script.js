    document.getElementById('g-pin').addEventListener("click", function(){
        const a=Math.random()*10000;
        const b=Math.floor(a);
        document.getElementById("input1").value=b;
    })

    function getNumber(number)
        {
            const display=document.getElementById('input2').value;
            document.getElementById('input2').value=display+number;
        }


            document.getElementById('one').addEventListener("click", function()
            {
                const Text=document.getElementById('one').innerText;
                getNumber(Text);
                })

                document.getElementById('two').addEventListener("click", function()
            {
                const Text=document.getElementById('two').innerText;
                getNumber(Text);
                })

                document.getElementById('three').addEventListener("click", function()
            {
                const Text=document.getElementById('three').innerText;
                getNumber(Text);
                })

                document.getElementById('four').addEventListener("click", function()
                {
                    const Text=document.getElementById('four').innerText;
                    getNumber(Text);
                    })

                    document.getElementById('five').addEventListener("click", function()
                    {
                        const Text=document.getElementById('five').innerText;
                        getNumber(Text);
                    })

                    document.getElementById('six').addEventListener("click", function()
                    {
                        const Text=document.getElementById('six').innerText;
                        getNumber(Text);
                        })

                        document.getElementById('seven').addEventListener("click", function()
                        {
                            const Text=document.getElementById('seven').innerText;
                            getNumber(Text);
                            })

                            document.getElementById('eight').addEventListener("click", function()
                        {
                            const Text=document.getElementById('eight').innerText;
                            getNumber(Text);
                            })

                            document.getElementById('nine').addEventListener("click", function()
                        {
                            const Text=document.getElementById('nine').innerText;
                            getNumber(Text);
                            })

                            document.getElementById('zero').addEventListener("click", function()
                        {
                            const Text=document.getElementById('zero').innerText;
                            getNumber(Text);
                            })

document.getElementById('submitBtn').addEventListener("click", function(){
    const display1=document.getElementById('input1').value;
    const display2=document.getElementById('input2').value;
    if(display1==display2)
    {
        document.getElementById("match").style.display="block";
    }
    else{
        document.getElementById("dont-match").style.display="block";
    }

})

                           



