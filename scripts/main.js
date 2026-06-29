//simple utility
function nthIndexOf(str, substring, n) {
    let index = -1;
    for (let i = 0; i < n; i++) {
      index = str.indexOf(substring, index + 1);
      if (index === -1) break; // substring doesn't appear n times
    }
    return index;
}

//main code
function backend() {

    //extracts the percentage weights
    const a = document.getElementById("a").value
    const b = document.getElementById("b").value
    const c = document.getElementById("c").value
    

    //extracts the ratios
    const ratio1 = document.getElementById("ratio1")
    const ratio2 = document.getElementById("ratio2")
    const ratio3 = document.getElementById("ratio3")


    //extracts the number of macronutrients from the ratios
    const fat1End = nthIndexOf(ratio1.value, ":", 1)
    const fat1 = ratio1.value.slice(0, fat1End)   
    const carb1Start = nthIndexOf(ratio1.value, ":", 1) + 1
    const carb1End = nthIndexOf(ratio1.value, ":", 2)
    const carb1 = ratio1.value.slice(carb1Start, carb1End)
    const protien1Start = nthIndexOf(ratio1.value, ":", 2) + 1
    const protein1 = ratio1.value.slice(protien1Start, ratio1.length)

    const fat2End = nthIndexOf(ratio2.value, ":", 1)
    const fat2 = ratio2.value.slice(0, fat2End)   
    const carb2Start = nthIndexOf(ratio2.value, ":", 1) + 1
    const carb2End = nthIndexOf(ratio2.value, ":", 2)
    const carb2 = ratio2.value.slice(carb2Start, carb2End)
    const protien2Start = nthIndexOf(ratio2.value, ":", 2) + 1
    const protein2 = ratio2.value.slice(protien2Start, ratio2.length)

    const fat3End = nthIndexOf(ratio3.value, ":", 1)
    const fat3 = ratio3.value.slice(0, fat3End)   
    const carb3Start = nthIndexOf(ratio3.value, ":", 1) + 1
    const carb3End = nthIndexOf(ratio3.value, ":", 2)
    const carb3 = ratio3.value.slice(carb3Start, carb3End)
    const protien3Start = nthIndexOf(ratio3.value, ":", 2) + 1
    const protein3 = ratio3.value.slice(protien3Start, ratio3.length)


    //doing the math
    const x1 = (a/(fat1+carb1+protein1))
    const x2 = (b/(fat2+carb2+protein2))
    const x3 = (c/(fat3+carb3+protein3))
    const fatF = x1*fat1+x2*fat2+x3*fat3
    const carbF = x1*carb1+x2*carb2+x3*carb3
    const proteinF = x1*protein1+x2*protein2+x3*protein3

    //giving the answer
    console.log(`${fatF}:${carbF}:${proteinF}`)
    
}

document.querySelector("button").addEventListener("click", backend)
