import { Solutions } from './solutions.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})




export class SolutionsComponent {

  sols: Solutions[] = [
    { id: 1, title: 'IMPLEMENTAÇÃO DE I.A.', description: 'Somos experts em Inteligência Artificial, Machine Learning e Deep Learning e podemos ajudá-lo a aplicar inteligência em sua organização para crescer, proteger e otimizar seus negócios.' },
    { id: 2, title: 'DATA SCIENCE E DATA ANALYTICS', description: 'Nossa equipe de profissionais possui experiência na condução de análises de dados corporativos e de mercado. A partir dessas análises, conseguimos fornecer informações valiosas para sua empresa que o ajudarão a tomar melhores decisões.' },
    { id: 3, title: 'ANÁLISES PREDITIVAS E PRESCRITIVAS', description: 'Com base em dados históricos são identificados riscos e oportunidades para o futuro. Para criar esses modelos de análise usamos dados estruturados e dados não estruturados.' },
    { id: 4, title: 'BIG DATA, DATA LAKE, DATAVIZ, B.I.', description: 'A grande quantidade de dados de diferentes formatos, provenientes de diferentes locais vem dificultando muito a eficiência das análises. Nós podemos ajudá-lo a integrar esses dados em uma única fonte ou em dashboards simples que fornecem informações valiosas.' },
    { id: 5, title: 'DEEPEN ENERGY', description: 'Inteligência Artificial, Machine Learning e Big Data constroem uma interface onde as informações decisivas para a competitividade estão ao alcance de quem precisa. Aceleração de vendas, capacitação no atendimento, resultados reais.' },
    { id: 6, title: 'SISTEMA DE RECOMENDAÇÃO', description: 'Sistemas de recomendação são aplicados em cenários em que os usuários interagem com muitos itens, tornando suas atividades mais complexas. A aplicação desses sistemas melhoraram a produtividade e os resultados do negócio como um todo.' },
    { id: 7, title: 'PLATAFORMAS DE BIG DATA E GEOMARKETING', description: 'Por meio do cruzamento de dados sociodemográficos, empresariais, índices e indicadores diversos, além de dados públicos capturados por meio de APIs do Google e outras que se mostrem necessárias, é possível conhecer melhor o perfil de clientes e público-alvo. Entender o entorno de regiões de interesse ou de unidades próprias e muito mais.' },
  ]



}
