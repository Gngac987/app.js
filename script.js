

        document.getElementById('meuFormulario').addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário tradicional

            // Obtenha os valores dos campos
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var mensagem = document.getElementById('mensagem').value;

            // Exiba os valores no console (você pode modificar para enviar para um servidor)
            console.log('Nome:', nome);
            console.log('Email:', email);
            console.log('Mensagem:', mensagem);

            // Limpe os campos do formulário se desejar
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensagem').value = '';
        });
    
    
    