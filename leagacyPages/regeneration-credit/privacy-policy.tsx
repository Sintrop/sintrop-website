import { InferGetStaticPropsType, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

interface StaticProps {
    locale: string;
}

export async function getStaticProps({ locale }: StaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        },
    }
}

const PrivacyPolicy: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('Sintrop - Tecnologia e Sustentabilidade')}</title>
                <meta name='description' content={`${t('Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Regeneração.')}`} />
                <meta name="keywords" content="Agricultura, Regeneração, Sustentabilidade, Produtores regenerativos, comunidade" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sintrop.com" />
                <meta property="og:title" content="Sintrop - Tecnologia e Sustentabilidade" />
                <meta property="og:description" content={`${t('Nossa missão é regenerar o planeta através da tecnologia. Conheça nosso Sistema e o Token Crédito de Regeneração.')}`} />
                <meta property="og:locale" content={_props._nextI18Next?.initialLocale} />
                <link rel="canonical" href="https://sintrop.com" />
                <link rel='icon' type='image/png' href='/favicon.png' />
            </Head>

            <main className="flex flex-col items-center">
                <div className="flex flex-col w-full max-w-[1024px] p-5">
                    <h2 className="text-black font-bold text-center text-3xl">{t('privacyPolicy')}</h2>

                    {/* 1 */}
                    <h3 className="font-bold text-black mt-10">1. QUAL O OBJETIVO E A APLICABILIDADE DESTA POLÍTICA</h3>
                    <p className="text-black mt-1">1.1 Esta Política de Privacidade (“Política de Privacidade”) é aplicável aos usuários (“Usuários”) do
                        SISTEMA DESCENTRALIZADO DE REGENERAÇÃO DA NATUREZA (“Sistema”), desenvolvido pela
                        empresa SINTROP TECNOLOGIA E SUSTENTABILIDADE LTDA., denominada “Sintrop”, inscrita no
                        CNPJ/ME sob o nº 40.544.548/0001-17, e tem como objetivo esclarecer as suas práticas no que diz
                        respeito à privacidade e o tratamento dos dados pessoais dos usuários do site, plataforma,
                        aplicativo “App”, acessíveis no domínio “https://www.sintrop.com/”, além de demonstrar o seu
                        comprometimento com as melhores medidas de segurança das informações e transparência sobre
                        o tratamento dos dados pessoais.
                    </p>

                    <p className="text-black mt-3">
                        1.2 As condições estabelecidas nesta Política de Privacidade são aplicáveis no âmbito da utilização
                        do Sistema, disciplinada nos Termos de Uso e abrange todo o tratamento dado no âmbito do
                        Sistema aos dados pessoais necessários para atingir as finalidades determinadas neste documento
                        e que sejam capazes de identificar ou tornar identificável o usuário que visita, entra em contato e
                        navega no site da Sintrop, se cadastra na plataforma e/ou no aplicativo, e utiliza o Sistema.
                    </p>

                    {/* 2 */}
                    <h3 className="font-bold text-black mt-10">2. ACEITE</h3>
                    <p className="text-black mt-1">2.1 Ao manifestar o “Aceite” a esta Política de Privacidade, o usuário declara expressamente que
                        leu e entendeu todos os direitos e obrigações aqui determinados.
                    </p>

                    <p className="text-black mt-3">
                        2.2 Caso não concorde com os termos desta Política, ainda que parcialmente, o usuário pode não a
                        aceitar, mas deve estar ciente que algumas partes do Sistema não poderão ser utilizadas sem a
                        coleta de determinadas informações e/ou dados pessoais.
                    </p>

                    {/* 3 */}
                    <h3 className="font-bold text-black mt-10">3. COMO SÃO TRATADOS E PROTEGIDOS OS DADOS PESSOAIS</h3>
                    <p className="text-black mt-1">
                        3.1 Esta seção descreve as regras que serão observadas no tratamento dos dados pessoais pela
                        Sintrop e pelo Sistema para atender os padrões de proteção de dados exigidos pela legislação e
                        regulamentação vigentes.
                    </p>

                    <p className="text-black mt-3">
                        3.2 A Sintrop somente coleta, trata e mantém dados pessoais sensíveis que sejam estritamente
                        necessários e quando o propósito/finalidade do tratamento se enquadre em uma das hipóteses
                        legais permitidas, sendo certo que o usuário tem o direito de ser informado sobre a razão e a forma
                        pela qual seus dados pessoais são coletados, tratados e mantidos durante todo o processo.
                    </p>

                    {/* 4 */}
                    <h3 className="font-bold text-black mt-10">4. QUAIS DADOS SÃO COLETADOS E PARA QUAIS FINALIDADES DE TRATAMENTO:</h3>
                    <p className="text-black mt-1">
                        4.1 O Sistema coleta e trata dados pessoais e/ou dados pessoais sensíveis para alcançar as seguintes
                        finalidades:
                    </p>

                    <p className="text-black mt-3 ml-7">
                        a- Ao se cadastrar para utilizar o Sistema, são coletados e processados os seguintes dados
                        pessoais e/ou dados pessoais sensíveis: nome, endereço, geolocalização e foto;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        b- Do Produtor, serão coletados e processados dados pessoais e dados sensíveis, tais como:
                        nome, endereço, geolocalização dos pontos das áreas e foto;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        c- Do Inspetor, serão coletados e processados dados pessoais e dados sensíveis, tais como:
                        nome, geolocalização e foto;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        d- Do Pesquisador, serão coletados e processados dados pessoais e dados sensíveis, tais como:
                        nome e foto;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        e- Do Apoiador, serão coletados e processados dados pessoais, tais como: nome;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        f- Ao realizar o preenchimento do formulário de contato disponibilizado no SITE é coletado o
                        nome, e-mail e telefone;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        g- Quando do envio voluntário de informações por e-mail ou pelas redes sociais pelos clientes
                        para solicitar suporte, esclarecer dúvidas, reclamações, são coletados: nome completo e e-mail;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        h- Para proceder à emissão de notas fiscais, são tratados os seguintes dados: Nome Completo,
                        endereço e CPF.
                    </p>

                    <p className="text-black mt-3">
                        4.1.1 Os dados indicados nos itens acima serão coletados diretamente do usuário ou visitante,
                        quando estes acessam e utilizam o Site e o Sistema da plataforma e quando realizam cadastros em
                        formulários e/ou quando enviam voluntariamente via chat, e-mail ou redes sociais.
                    </p>

                    {/* 5 */}
                    <h3 className="font-bold text-black mt-10">5. QUAIS FUNDAMENTOS LEGAIS AUTORIZAM O TRATAMENTO DOS DADOS</h3>
                    <p className="text-black mt-3">
                        5.1 O tratamento de dados pessoais e dados sensíveis é realizado de maneira compatível com a
                        finalidade original para a qual foram coletados, nos termos definidos nesta Política de Privacidade
                        e não poderão ser tratados com propósitos diversos.
                    </p>
                    <p className="text-black mt-3">
                        5.2 Os usuários concordam que os dados serão tratados de acordo com os fundamentos legais
                        abaixo:
                    </p>
                    <p className="text-black mt-3 ml-7">
                        a- Para permitir a utilização do Sistema Descentralizado de Regeneração da Natureza e o
                        cumprimento de todas as suas finalidades (artigo 7º, inciso II da LGPD);
                    </p>
                    <p className="text-black mt-3 ml-7">
                        b- Para garantir a prevenção à fraude e a segurança do titular, nos processos de identificação
                        e autenticação de cadastro em sistemas eletrônicos (artigo 11, inciso II, alínea “g” da LGPD);
                    </p>
                    <p className="text-black mt-3 ml-7">
                        c- Para permitir o cumprimento de obrigações legais ou regulatórias por parte da Sintrop
                        (artigo 7ª, inciso II e artigo 11, inciso II, alínea “a” e alínea “g”, ambos da LGPD);
                    </p>
                    <p className="text-black mt-3 ml-7">
                        d- Para permitir exercício regular de direitos, inclusive em contrato e em processo judicial,
                        administrativo e arbitral (artigo 7º, inciso VI e artigo 11, inciso II, alínea “d”), ambos da LGPD).
                    </p>

                    <p className="text-black mt-3">
                        5.3 É importante esclarecer que o Sistema apenas trata dados pessoais e dados pessoais sensíveis
                        na medida em que seja necessário para atingir as finalidades específicas definidas nesta Política e
                        se estas estiverem de acordo com as bases legais acima.
                    </p>

                    <p className="text-black mt-3">
                        5.4 O Usuário está ciente de que, devido à natureza da tecnologia Blockchain utilizada no Sistema,
                        alguns dados pessoais não poderão ser removidos, mesmo mediante sua solicitação, já que uma das
                        caraterísticas dessa tecnologia é a imutabilidade e descentralização.
                    </p>

                    {/* 6 */}
                    <h3 className="font-bold text-black mt-10">6. TEMPO DE DURAÇÃO DO TRATAMENTO DOS DADOS</h3>
                    <p className="text-black mt-3">
                        6.1 Os dados coletados serão tratados pelo tempo suficiente para atingir as finalidades definidas na
                        cláusula 4.1. No entanto, devido ao conteúdo explicado na cláusula 5.4., é importante atentar para
                        a questão da imutabilidade dos dados registrados em Blockchain, que é a essência do Sistema e de
                        sua funcionalidade
                    </p>

                    {/* 7 */}
                    <h3 className="font-bold text-black mt-10">7. COMO COMPARTILHAMOS SEUS DADOS PESSOAIS</h3>
                    <p className="text-black mt-3">
                        7.1 Não divulgamos os seus Dados Pessoais a terceiros de maneira que seria considerada uma venda
                        ou comercialização. Diante do caráter descentralizado da rede Blockchain utilizada pelo Sistema, os
                        Dados Pessoais ficam disponíveis para todos os participantes do Sistema.
                    </p>
                    <p className="text-black mt-3">
                        7.2 O Sistema apenas realiza a transmissão de dados do Usuário a terceiros, alheios ao Sistema, que
                        tenham necessidade legítima para acessá-los e prestam serviços indispensáveis para otimizar seu
                        funcionamento e atingir suas finalidades definidas na cláusula 4, tais como:
                    </p>
                    <p className="text-black mt-3 ml-7">
                        a- Com empresas que gerenciam os sistemas tecnológicos, plataforma, servidor de e-mail
                        e bases de dados utilizados;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        b- Com o sistema de arquivos IPFS (Inter Planetary File System) que será utilizado para
                        realizar o upload das fotos;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        c- Com o banco centralizador que são as interações realizadas na plataforma pelos próprios
                        usuários, tais como: curtidas, publicações e mensagens.
                    </p>

                    <p className="text-black mt-3">
                        7.3 Os prestadores de serviços terceirizados que tratem os dados dos usuários estão sujeitos às
                        obrigações e às responsabilidades impostas aos agentes de tratamento que atuam como
                        Operadores, de acordo com a legislação e regulamentação de Proteção de Dados Pessoais
                        aplicáveis.
                    </p>

                    {/* 8 */}
                    <h3 className="font-bold text-black mt-10">8. TRANSFERÊNCIA INTERNACIONAL DOS DADOS</h3>
                    <p className="text-black mt-3">
                        8.1 Em regra, os Dados Pessoais serão tratados e permanecerão armazenados no território
                        brasileiro. Contudo, caso haja necessidade, esses poderão ser transferidos para outros países, como
                        no caso da IPFS. Recomendamos que o Usuário acesse os termos de uso respectivos e caso não
                        esteja de acordo, não acesse o Sistema.

                        Link para o site: <a href="https://ipfs.tech" target="_blank" className="underline text-blue-500">https://ipfs.tech</a>
                    </p>

                    {/* 9 */}
                    <h3 className="font-bold text-black mt-10">9. QUAIS SÃO OS SEUS DIREITOS</h3>
                    <p className="text-black mt-3">
                        9.1 O Sistema garante ao usuário o exercício dos direitos que lhe são conferidos nos termos da Lei
                        Geral de Proteção de Dados (LGPD – Lei 13.853/2019), e que podem ser exercidos tendo em vista
                        a natureza descentralizada e imutável da tecnologia Blockchain, utilizada pelo Sistema,sendo estes:
                    </p>
                    <p className="text-black mt-3 ml-7">
                        a- Confirmação da existência de tratamento – o que é assegurado por meio desta Política de
                        Privacidade;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        b- Direito de acesso – ou seja, o direito de solicitar o acesso aos seus dados pessoais e/ou dados
                        sensíveis que processamos;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        c- Direito à informação – o direito de saber com quais entidades – públicas ou privadas - a Sintrop
                        compartilhou seus dados;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        d- Direito à oposição – o direito do usuário se opor ao tratamento de dados pessoais que não
                        esteja em alinhamento com as determinações da LGPD;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        e- Direito de petição – contra a Sintrop ou à Autoridade de Proteção de Dados aplicável, se o
                        usuário tiver motivos para supor que qualquer um de seus direitos de proteção de dados
                        pessoais tenha sido violado.
                    </p>
                    <p className="text-black mt-3">
                        9.2 Estes direitos, que são limitados em razão da tecnologia Blockchain utilizada no Sistema,
                        poderão ser exercidos por meio de requerimento expresso do usuário enviado ao Encarregado de
                        Proteção de Dados, através do endereço eletrônico disponibilizado na cláusula 12.1 desta Política,
                        e serão atendidos, sempre que possível, imediatamente.
                    </p>
                    <p className="text-black mt-3">
                        9.3 Na hipótese de impossibilidade de resposta imediata ao requerimento, a Sintrop comunicará ao
                        usuário que não é agente de tratamento de dados, devendo nesta hipótese indicar o agente, ou
                        cientificá-lo das razões de fato e de direito que a impedem de atender ao requerimento
                        imediatamente.
                    </p>

                    {/* 10 */}
                    <h3 className="font-bold text-black mt-10">10. PADRÕES DE SEGURANÇA </h3>
                    <p className="text-black mt-3">
                        10.1 O Sistema procura implementar padrões de Segurança da Informação e com a proteção de
                        Dados Pessoais e Dados Sensíveis com vistas a garantir o direito fundamental do indivíduo à
                        autodeterminação da informação, bem como a confidencialidade, a integridade e disponibilidade,
                        a autenticidade, a responsabilidade e o não repúdio.
                    </p>
                    <p className="text-black mt-3">
                        10.2. Operadores ou pessoas autorizadas que se utilizarem indevidamente de informações, ferindo
                        esta Política de Privacidade, estarão sujeitos à responsabilização e às medidas legais cabíveis.
                    </p>
                    <p className="text-black mt-3">
                        10.3 Além das hipóteses previstas na cláusula 7, os dados coletados e as atividades registradas
                        apenas poderão ser compartilhados:
                    </p>
                    <p className="text-black mt-3 ml-7">
                        a- Com autoridades judiciais, administrativas ou governamentais competentes, sempre que
                        houver determinação legal, requerimento, requisição ou ordem judicial, e, ainda, para
                        instruir processos investigativos de cooperação internacional, conforme autorizado pela
                        legislação vigente;
                    </p>
                    <p className="text-black mt-3 ml-7">
                        b- De forma automática, em caso de movimentações societárias, como fusão, cisão, aquisição
                        e incorporação.
                    </p>

                    {/* 11 */}
                    <h3 className="font-bold text-black mt-10">11. DISPOSIÇÃO DOS DADOS PELO USUÁRIO</h3>
                    <p className="text-black mt-3">
                        11.1 Os usuários serão sempre informados sobre os dados a serem coletados, ficando a seu critério
                        fornecê-los ou não, e, em cada caso, serão avisados sobre as consequências de sua decisão.
                    </p>
                    <p className="text-black mt-3">
                        11.2 Os usuários garantem a veracidade e exatidão dos dados pessoais fornecidos no Sistema,
                        assumindo a correspondente responsabilidade caso estes não sejam exatos. Constitui ainda como
                        responsabilidade dos usuários o dever de manter atualizados seus dados cadastrais, principalmente
                        o e-mail, adotando as devidas cautelas para que os e-mails do site não sejam enviados para a caixa
                        de lixo eletrônico.
                    </p>

                    {/* 12 */}
                    <h3 className="font-bold text-black mt-10">12. CONTATO</h3>
                    <p className="text-black mt-3">
                        12.1 Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade e/ou
                        nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao Tratamento de seus
                        Dados Pessoais, favor contatar-nos por meio do e-mail contact@sintrop.com
                    </p>

                    {/* 13 */}
                    <h3 className="font-bold text-black mt-10">13. DISPOSIÇÕES FINAIS</h3>
                    <p className="text-black mt-3">
                        13.1 A Sintrop se reserva o direito de modificar a presente Política de Privacidade a qualquer tempo,
                        observando a legislação aplicável, sendo o USUÁRIO comunicado de tais alterações que serão
                        consideradas imediatamente aplicáveis, vigentes e vinculantes entre as partes.
                    </p>
                    <p className="text-black mt-3">
                        13.2 Esta Política deve ser interpretada segundo a legislação brasileira. Fica eleito foro da comarca
                        de Florianópolis/SC para resolução de qualquer litígio ou controvérsia envolvendo este documento.
                    </p>

                    <p className="text-black mt-3 text-right">
                        Data da última atualização: 13/10/2023
                    </p>
                </div>
            </main>
        </>
    )
}

export default PrivacyPolicy;