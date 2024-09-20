const buttons = document.querySelectorAll('button')
const pantalla = document.querySelector('#display')

for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',escribir);
}

function escribir(){
    let contenido=pantalla.value;
    let ultimo = contenido.slice(-1);
    let ultimoEsOperador = (ultimo === '+'||ultimo === '-'||ultimo === '*'||ultimo === '/')
    let esOperador = (this.value==='+'||this.value === '-'||this.value === '*'||this.value === '/')
    
    if(this.value==='ac'){
        pantalla.value = '';
        return;
    }else{
        if(this.value==='='){
            if(ultimoEsOperador){
                pantalla.value = 'ERROR';//Si al resolver el ultimo valor es un operador
                return;
            }else{
                pantalla.value=eval(pantalla.value);
                return;
            }
        }
        if(this.value === 'delete'){
            pantalla.value = contenido.slice(0,contenido.length-1);
            return;
        }
        //dejamos poner signo '+' o el '-' para poner valores positivos o negativos al principio
        if(pantalla.value===''){
            if(this.value==='+'||this.value==='-'){
                pantalla.value+=this.value;
                return;
            }else if(this.value==='/'||this.value==='*'){
                return;
            }else{
                pantalla.value+=this.value;
            }
        }else{
            if(contenido.length===1&&(this.value==='+'||this.value==='-')){
                if(ultimoEsOperador){
                    pantalla.value = contenido.slice(0,contenido.length-1)+this.value;
                }else{
                    pantalla.value+=this.value;
                }
                return;
            }else if(!esOperador){
                pantalla.value+=this.value;
                return;
            }
            if(!ultimoEsOperador){
                pantalla.value+=this.value;
            }else if(ultimoEsOperador){
                pantalla.value = contenido.slice(0,contenido.length-1)+this.value;
            }
                
        }
    }
}