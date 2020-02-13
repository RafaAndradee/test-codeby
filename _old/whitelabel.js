

<div class="encaps_divs" style="margin-top:0; padding:0;">


<input id="campo_pesquisa_aerea_controle_id" type="hidden" value="">
<input id="campo_diasAdicionaisI" type="hidden">
<input id="campo_diasAdicionaisV" type="hidden">
<input id="campo_TarifaEstudante" type="hidden" value="0">
<input id="campo_exibirRegraTarifaria" type="hidden" value="S">

<div class="buscador_refazer_pesquisa" id="divRefazerPesquisa">

    <a class="refazer_pesquisa_fechar" href="javascript:void(0)" onclick="$('#divRefazerPesquisa').fadeOut('fast');$('#btnRefazerPesquisa').parent().fadeIn();">
        <img src="/OnlineTravelFrameMVC/Content/Frame/Images/ico-close.png" title="Fechar">
    </a>

    <div class="bloco">

        <div class="radios">
            <label class="check way">
                <input type="radio" name="chkTipoViagem" value="2" checked="checked"><span>Ida e Volta</span>
            </label>
            <label class="check">
                <input type="radio" name="chkTipoViagem" value="1"><span>Somente Ida</span>
            </label>
            <label class="check">
                <input type="radio" name="chkTipoViagem" value="3"><span>Múltiplos Trechos</span>
            </label>
        </div>

    </div>

    <div class="bloco">

        <div id="RefazerPesquisaIdaVolta">
            <div class="bloco30">
                <label class="bloco50">
                    <span class="legend">Origem:</span>
                    <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input type="text" id="txtOrigem" value="" placeholder="Cidade Origem" class="ui-autocomplete-input" autocomplete="off" style="text-transform: uppercase;">
                </label>
                <label class="bloco50 last">
                    <span class="legend">Destino:</span>
                    <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input type="text" id="txtDestino" value="" placeholder="Cidade Destino" data-df="N" class="ui-autocomplete-input" autocomplete="off" style="text-transform: uppercase;">
                </label>
            </div>
            <div class="bloco30">
                <label class="bloco50">
                    <span class="legend">Partida</span>
                    <input type="text" id="txtPartida" value="" class="hasDatepicker">
                </label>
                <label class="bloco50 last">
                    <span class="RefazerPesquisaRetorno legend" style="display:">Retorno</span>
                    <input type="text" class="RefazerPesquisaRetorno hasDatepicker" id="txtRetorno" value="" style="display:">
                </label>
            </div>
        </div>

        <div class="multi_trechos" id="RefazerPesquisaMultiplos" style="display:none;">
            <div>
                <div class="bloco70">
                    <label class="bloco50">
                        <span class="legend">Origem:</span>
                    </label>
                    <label class="bloco50 last">
                        <span class="legend">Destino:</span>
                    </label>
                </div>
                <div class="bloco30">
                    <label class="bloco50">
                        <span class="legend">Data</span>
                    </label>
                </div>
            </div>

            <div class="bloco_trecho" id="divTrechos">
                    <article id="divTrecho_1">
                        <div class="bloco70">
                            <label class="bloco50">
                                <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input type="text" id="txtOrigem_1" value="" placeholder="Cidade Origem" class="ui-autocomplete-input" autocomplete="off" style="text-transform: uppercase;">
                            </label>
                            <label class="bloco50 last">
                                <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input type="text" id="txtDestino_1" value="" placeholder="Cidade Destino" data-df="N" class="ui-autocomplete-input" autocomplete="off" style="text-transform: uppercase;">
                            </label>
                        </div>
                        <div class="bloco30">
                            <label class="bloco100">
                                <input type="text" id="txtPartida_1" value="" class="hasDatepicker">
                            </label>
                        </div>
                    </article>
            </div>

            <div id="divMaisMenosTrechos" class="acoes_trechos">
                <span class="mais" title="Adicionar Trecho" onclick="MaisTrecho()"></span>
                <span class="menos" title="Remover Trecho" onclick="MenosTrecho()" style="display: none;"></span>
            </div>
        </div>

        <div class="bloco30 pessoas">
            <label class="bloco30">
                <span class="legend" id="spanLegendAdulto">Adultos</span>
                <select id="selectAdultos">
                            <option value="0" selected="selected">0</option>
                            <option value="1" selected="selected">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                </select>
            </label>
            <div id="divPassageirosCHDINF">
                <label class="bloco30">
                    <span class="legend">Crianças</span>
                    <select id="selectCriancas">
                            <option value="0" selected="selected">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                    </select>
                </label>
                <label class="bloco30">
                    <span class="legend">Bebês</span>
                    <select id="selectBebes">
                            <option value="0" selected="selected">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                    </select>
                </label>
            </div>
            <label class="bloco100 checks">
                <input type="checkbox" name="chkTarifaEstudante" id="chkTarifaEstudante" value="chkTarifaEstudante">
                <span>Tarifa estudante</span>
            </label>
        </div>
        <div class="btn_refazer_pesquisa">
            <button id="btnPesquisar">Pesquisar</button>
        </div>
    </div>

</div>




<div class="ds-none">

    <select id="selectHorarioIda" style="display: none;">
        <option value="0">Qualquer</option>
        <option value="1">Madrugada</option>
        <option value="2">Manhã</option>
        <option value="3">Tarde</option>
        <option value="4">Noite</option>
    </select>




    <select id="selectHorarioVolta" style="display: none;">
        <option value="0">Qualquer</option>
        <option value="1">Madrugada</option>
        <option value="2">Manhã</option>
        <option value="3">Tarde</option>
        <option value="4">Noite</option>
    </select>


</div>



        </div>
