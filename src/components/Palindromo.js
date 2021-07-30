import React, { useMemo, useState } from "react";

export default function Palindromo() {
    const [word, setWord] = useState("");

    const isPalindrome = useMemo(() => {
        var re = /[\W_]/g;
        var lowRegStr = word.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    }, [word]);

    return (
        <div className="App">
            <form>
                <div>
                    <label>Palavra ou frase</label>
                    <br />
                    <input className="border p-1" type="text" value={word} onChange={(e) => setWord(e.target.value)} />
                </div>
            </form>
            <div>É um  Palíndromo:{isPalindrome ? "Sim" : "Não"}</div>
        </div>
    );
}