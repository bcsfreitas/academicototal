import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tituloProduto = 'Acadêmico Total';

  features: any = [
    {
      nome: 'Ocorrências',
      // tslint:disable-next-line:max-line-length
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icone: ''
    },
    {
      nome: 'Boletim',
      // tslint:disable-next-line:max-line-length
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icone: ''
    },
    {
      nome: 'Controle de Acesso',
      // tslint:disable-next-line:max-line-length
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      icone: ''
    },
  ];

  beneficios: any = [
    {
      nome: 'Redução do uso de recursos',
      beneficios: [
        '-80% de Papel',
        'Tempo de Pessoal',
        'Consumo de Energia',
        'Consumo de Toner',
        'Conta de Telefone',
        'Fácil integração com sustemas de gestão atuais da escola'
      ]
    },
    {
      nome: 'Controle Disciplinar',
      beneficios: [
        'Redução de evasão escolar',
        'Aumento da eficiência do conselho de Classe',
        'Auxílio do Controle de ocorrências na sala de aula'
      ]
    },
    {
      nome: 'Mais Participação de Responsáveis',
      beneficios: [
        'Comunicados e Ocorrências com monitoramento de quem leu',
        'Controle em qualquer lugar através de App',
        'Aumento de 80% de responsáveis nas reuniões',
        'Suporte para pais separados / divorciados'
      ]
    },
  ];

  contagem: any = {
    alunos: '8.763',
    educadores: '273',
    cidades: '13',
    escolas: '26'
  };
}
