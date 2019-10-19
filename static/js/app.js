function showGraph() {
    //Code to display graph
    document.getElementById('ke_graph').innerText = "Graph Shown Here";
    document.getElementById('ke_graph').style.display ="block";    
}

// Function to reset 'Explore' text box to empty value & make graph div as hidden
function resetExplore() {
    document.getElementById('ke_txt_explore').value = "";
    document.getElementById('ke_graph').innerText = "";
    document.getElementById('ke_graph').style.display ="none";
}

//Event Handlers for Knowledge Explorer Submit & Reset buttons
const ke_clk_btn_submit = document.querySelector('#ke_btn_submit');

ke_clk_btn_submit.addEventListener('click', e=> {
    e.preventDefault();
    showGraph();
})

const ke_clk_btn_reset = document.querySelector('#ke_btn_reset');

ke_clk_btn_reset.addEventListener('click', e=> {
    e.preventDefault();
    resetExplore();
})