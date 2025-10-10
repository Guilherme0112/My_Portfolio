import Studies from "../Studies/Studies";

export default function StudiesBlock() {

    const estudos = [
        {
            curso: "API - Application Programming Interface",
            unidade: "DevMedia",
            periodo: "Julho de 2024",
            certificateLink: "https://www.devmedia.com.br/certificado/conclusao/?id=179442"

        },
        {
            curso: "Sistemas para Internet",
            unidade: "UNIPÊ - Centro Universitário de João Pessoa",
            periodo: "Janeiro de 2024 - em andamento"
        },
        {   
            curso: "Curso de Programação Orientada a Objetos com PHP",
            unidade: "DevMedia",
            periodo: "Julho de 2024",
            certificateLink: "https://www.devmedia.com.br/certificado/conclusao/?id=179219"
        },
        {
            curso: "Primeiros passos com o Docker",
            unidade: "DevMedia",
            periodo: "Janeiro de 2025",
            certificateLink: "https://www.devmedia.com.br/certificado/conclusao/?id=183833"
        },
        {
            curso: "Básico de Java e Orientação a Objetos",
            unidade: "DevMedia",
            periodo: "Dezembro de 2024",
            certificateLink: "https://www.devmedia.com.br/certificado/unificado/java/guilherme-gomes-20"
        },
    ];

    return (
        <>
            {estudos.map((estudo, index) => (
                <Studies key={index} cursoP={estudo.curso} unidadeP={estudo.unidade} periodoP={estudo.periodo} certificateLink={estudo.certificateLink} />
            ))}
        </>
    );
}