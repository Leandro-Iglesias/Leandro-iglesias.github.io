document.querySelectorAll('.InformacoesPessoais li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todas as seções
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' à seção correspondente ao item clicado
        const targetId = item.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});