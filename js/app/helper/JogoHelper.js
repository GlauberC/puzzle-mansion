class JogoHelper{
    
    static telaJogo(areaDificuldade, areaJogo, infoChute, areaVitoria){
        
        areaDificuldade.classList.add("invisivel");
        infoChute.classList.remove("invisivel");
        areaJogo.classList.remove("invisivel");
        document.querySelector(".btn-chutar").classList.remove("invisivel")
        areaVitoria.classList.add("invisivel");
    }
    static telaDificuldade(areaDificuldade, areaJogo){
        areaJogo.classList.add("invisivel");
        areaDificuldade.classList.remove("invisivel");
    }
    static telaVitoria(areaVitoria, infoChute){
        document.querySelector(".btn-chutar").classList.add("invisivel");
        areaVitoria.classList.remove("invisivel");
        infoChute.classList.add("invisivel");
    };
}