/* Mengambil element HMTL di code Javascript */
const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')
const calculatorScreen2 =  document.querySelector('.calculator-screen2')

/* Definisikan variable untuk melalukan kalkulasi */
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

/* Definisikan function untuk memperbaharui layar tampilan */
const updateScreen = () => {
  /* Menampilkan sebuah angka */
  calculatorScreen.value = prevNumber + calculationOperator + currentNumber
  /* Menampilkan dua angka dan satu operator */
  prevUpdateScreen = prevNumber + calculationOperator + currentNumber
}
const updateScreen2 = () => {
/* Menampilkan angka dan operator */
calculatorScreen.value = prevNumber + calculationOperator
}
const updateScreen3 = () => {
/* Menampilkan hasil kalkulasi */
calculatorScreen.value = currentNumber
}

/* Menginput angka */
const inputNumber = (number) => {
    /* Kondisional ketika angka 0 dipencet terlebih dahulu */
    if (currentNumber === '0') {
      currentNumber = number
    } else {
      /* Menginput angka lebih dari 1 digit */
      currentNumber += number
    }
}

/* Menginput operator kalkulasi */
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    /* Operator ikut ditampilkan dalam layar kalkulator */
    updateScreen2()
    currentNumber = '0'
}
/* Mendapat masing-masing angka dari constant "numbers" */
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.innerText)
        /* Menampilkan bilangan yang dipencet pada layar kalkulator */
        updateScreen(currentNumber)
    })
})
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

/* Tombol sama-dengan (=) */
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    /* Menampilkan hasil kalkulasi pada layar kalkulator */
    updateScreen3()
})

/* Mendefinisikan function calculate sebagai operator */
const calculate = () => {
  let result = ''
  switch(calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      /* parseFloat digunakan agar dapat mengoperasikan bilangan desimal */
      break
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    case "×":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case "÷":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      return
  }
  /* Hasil kalkulasi disimpan ke currentNumber */
  currentNumber = result
  calculationOperator = ''
}

/* Tombol AC (All Clear) */
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

/* Mengalkulasi angka desimal */
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
/* Peng-inputan titik desimal */
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return /* Mencegah peng-inputan titik desimal berulang kali */
    }
    currentNumber += dot
}

/* Mengalkulasi bilangan persen */
const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', () => {
    currentNumber = currentNumber * 0.01
    updateScreen(currentNumber)
})