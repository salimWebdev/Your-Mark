const button=document.querySelector('button')
button.onclick = function () {
    let rows = Array.from(document.querySelectorAll("#table tr")).filter((_, i, arr) => i !== 0 && i !== arr.length - 1);
    // Skip header row
    const machari3=parseFloat(document.querySelector("#machari3").value) || 0;
    rows.forEach((row) => {
        let coef = parseFloat(row.querySelector("#coef").value) || 1;
        let fardh = parseFloat(row.querySelector("#fardh").value) || 0;
        let taqweem = parseFloat(row.querySelector("#taqweem").value) || 0;
        let tatbiq = parseFloat(row.querySelector("#tatbiq").value) || 0;
        let ikhtibar = parseFloat(row.querySelector("#ikhtibar").value) || 0;

        let average = ((taqweem+fardh+tatbiq)+ikhtibar*2)/5; // Average of grades
        // Multiply by coefficient

        row.querySelector(".subject_average").textContent = average.toFixed(2);
    });
    let total=0;
    let total_coef=0;
    rows.forEach((row) => {
        let coef = parseFloat(row.querySelector("#coef").value) || 1;

        let average = parseFloat(row.querySelector(".subject_average").textContent) || 0;
      
       
        let wina=0
        wina=average*coef;
        total+=wina;
    });
  
    let final=parseFloat((total+(machari3-10))/28);
    const thecover=document.getElementById('the_cover');
    thecover.style.zIndex="2";
    thecover.style.width="60%";
    thecover.style.height="45%";
    document.getElementById("my_mark").style.color="white";

    const the_mark=document.getElementById("the_mark");
    
    the_mark.textContent=final.toFixed(2);
    if(final<10){
        the_markk.textContent="eqra eqra ...."
        the_mark.style.color="red";
    }
    else{
        the_markk.textContent="piiiiii chikour"
        the_mark.style.color="green";
    }   
    
    

    
};

    


