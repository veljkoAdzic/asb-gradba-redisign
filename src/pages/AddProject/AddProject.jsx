import Dashboard from "../dashboard/Dashboard";
import './AddProject.css'

export default function AddProject(){

    return (
        <Dashboard>
            <div id="add-project-header">
                <h1>Поднесување ново барање</h1>
            </div>
            <div id="add-project-container" className="scrollable">
                <form id="add-project-form">
                {/* 
                    Vid baranje     [dropdown]
                    Kategorija      [radio]
                    Vid gradba      [textarea]
                    Opshtina        [dropdown]
                      Katastarska   [dropdown]
                      Parcela       [textarea]
                      [+]           (dodava predhodnu grupu)
                     Investori      [input text]
                     Adresa         [textarea]
                     [+]            (dodava predhodna grupa)
                    komentar        [textarea]   
                */}
                <label htmlFor="baranje-za">Барање се поднесува за:</label>
                <select name="baranje-za" id="baranje-za">
                    <option value="odobrenie-gradba">Одобрение за Градба</option>
                    <option value="other">Друго</option>
                </select>

                <p className="label-p">Категорија на градба:</p>
                <div id="radio-group">
                    <input type="radio" name="kategorija" value="kat1" id="kat1" checked />
                    <label htmlFor="kat1">Прва Категорија</label>
                    <input type="radio" name="kategorija" value="kat2" id="kat2" />
                    <label htmlFor="kat2">Втора Категорија</label>
                    <input type="radio" name="kategorija" value="nadleznostSK" id="nadleznostSK" />
                    <label htmlFor="nadleznostSK">Градби во надлезност на Град Скопје</label>
                    <input type="radio" name="kategorija" value="DTIRZ" id="DTIRZ" />
                    <label htmlFor="DTIRZ">Градби во надлезност на ДТИРЗ</label>
                </div>

                <label htmlFor="vid-gradba">Вид на градба:</label>
                <textarea name="vid-gradba" id="vidgradba"></textarea>

                <label htmlFor="objekt-adresa">Адреса на објектот:</label>
                <textarea name="objekt-adresa" id="objekt-adresa"></textarea>

                </form>
            </div>
        </Dashboard>
    );
}