let countdownTime = 2
; // Tempo de redirecionamento em segundos

// Substitua pelo seu link de afiliado
let affiliateLink = "https://go.hotmart.com/Y97273047Y"; // Seu link de afiliado

function startRedirect() {
    setTimeout(function() {
        window.location.href = affiliateLink; // Redireciona para o link de afiliado
    }, countdownTime * 1000); // Redireciona após o tempo em segundos
}

// Inicia o redirecionamento
startRedirect();
