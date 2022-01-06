const form = document.getElementById('math-form');
          
            form.addEventListener('submit', (event) => {
            
              event.preventDefault();
              
              let averageInput = (math.add(InputNumber1.value, InputNumber2.value, InputNumber3.value)/3);
              let medianInput = (math.median(InputNumber1.value, InputNumber2.value, InputNumber3.value));
              
              document.getElementById('average').innerHTML = averageInput;
              document.getElementById('median').innerHTML = medianInput;
          
            })