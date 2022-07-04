$(function() {
    // CARREGA O HEATMAP BASICO COM VALORES PADRÃO
    getHeatMap(100, 12, 7);

    function getHeatMap(maxEscalaDados, meses, qtdLinha) {
        var heatmapHTML = "";
        heatmapHTML += '<table class="table table-condensed">';
        heatmapHTML += '  <thead>';
        heatmapHTML += '      <tr>';
        
        var linha = 0;
        while(linha <= qtdLinha) {
            // Linhas de cabecalho
            if(linha == 0){
                var legendaTopo = 0
                while(legendaTopo <= meses) {
                    if(legendaTopo == 0){
                        heatmapHTML += '<th>&nbsp;</th>';
                    }else{
                        heatmapHTML += '<th class="topo text-center">'+toMonthName(legendaTopo)+'</th>';
                    }
                    legendaTopo++
                }            
                heatmapHTML += '</tr>';                 
            }else{
                // Linhas de dados
                heatmapHTML += '<tr>';
                var celula = 0;
                while(celula <= meses) {
                    // Legenda "Lateral"
                    if(celula == 0){
                        heatmapHTML += '<th class="lateral text-center">'+toDayName(linha)+'</th>';
                    }else{
                        ////  Gerando dados aleatórios
                        // Aqui é gerado um valor aleatório entre 0 e maxEscalaDados. Aqui poderia ser carregado um JSON com os dados por exemplo!
                        var valRandom = Math.floor(Math.random() * maxEscalaDados);
                        heatmapHTML += '<td class="conteudo text-center my-0">'+ valRandom +'</td>';
                    }
                    celula++
                }
                heatmapHTML += '</tr>';
            }
            linha++;                                                                                    
        }
        heatmapHTML += '  </thead>';
        heatmapHTML += '</table>';
        
        $("#heatmap").html(heatmapHTML);

        applyColor(maxEscalaDados);
        getMaxEscalaDados(maxEscalaDados);
    }

    $("#btnEscala").on("click", function(){
        var maxEscalaDados = $("#maxEscalaDados").val();
        getHeatMap(maxEscalaDados, 12, 7);
    });

    function applyColor(maxEscalaDados){
        $("td").each(function(td){
            var tdIntensidade = $(this).html();
            var cor = getColor(tdIntensidade, maxEscalaDados);
            $(this).css( "background-color", cor );
        });
    }   
    
    function getMaxEscalaDados(maxEscalaDados){
        var legendaText = getValuesLegenda(maxEscalaDados);
        $("#legendaText").html(" ");
        legendaText.forEach(function(valor){
            var text = "";
            if(valor > 0 && valor < 1){
                text = valor.toString();
                text = text.substring(0,3);
            }else{
                text = valor;
            }
            // var text = (valor == 0 ? .substr(0,4) : valor);
                                    
            $(".legendaText").append('<div class="legendaItem">~'+text+'</div>');
        });        
    }

    // Fazer um array com os valores para não repetir código
    function getValuesLegenda(maxEscalaDados){
        
        var colorValue = [];
        colorValue[0] = 0;
        colorValue[1] = (maxEscalaDados / 10);
        colorValue[2] = (colorValue[1] * 2);
        colorValue[3] = (colorValue[2] + colorValue[1]);
        colorValue[4] = (colorValue[3] + colorValue[2]);
        colorValue[5] = (colorValue[4] + colorValue[3]);
        colorValue[6] = maxEscalaDados;
        
        return colorValue;
    }
    
    function getColor(pIntensidade, maxEscalaDados){               
       
        var colorValue = [];
        colorValue[0] = 0;
        colorValue[1] = (maxEscalaDados / 10);
        colorValue[2] = (colorValue[1] * 2);
        colorValue[3] = (colorValue[2] + colorValue[1]);
        colorValue[4] = (colorValue[3] + colorValue[2]);
        colorValue[5] = (colorValue[4] + colorValue[3]);
        colorValue[6] = maxEscalaDados;
        

        if(pIntensidade <= colorValue[0]){
            return "#3345A7";
        }else if(pIntensidade <= colorValue[1]){
            return "#517D86";
        }else if(pIntensidade <= colorValue[2]){
            return "#5F9676";
        }else if(pIntensidade <= colorValue[3]){
            return "#FFBE40";
        }else if(pIntensidade <= colorValue[4]){
            return "#FEE93E";
        }else if(pIntensidade <= colorValue[5]){
            return "#EFB73A";
        }else{
            return "#CB3F30";
        }
    }
    
    function toMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('pt-BR', {
            month: 'long',
        });
    }

    function toDayName(dayNumber) {
        const date = new Date();
        // Porque menos 5 pra iniciar no domingo?
        date.setDate(dayNumber-5);

        return date.toLocaleString('pt-BR', {
            weekday: 'short',
        });
    }
});