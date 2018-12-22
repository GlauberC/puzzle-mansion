class JogoHelper{
    
    static telaJogo(areaDificuldade, areaJogo, areaVitoria){
        
        areaDificuldade.classList.add("invisivel");
        areaJogo.classList.remove("invisivel");
        document.querySelector(".btn-chutar").classList.remove("invisivel")
        areaVitoria.classList.add("invisivel");
    }
    static telaDificuldade(areaDificuldade, areaJogo){
        areaJogo.classList.add("invisivel");
        areaDificuldade.classList.remove("invisivel");
    }
    static telaVitoria(areaVitoria){
        document.querySelector(".btn-chutar").classList.add("invisivel");
        areaVitoria.classList.remove("invisivel");
    };
}