export default function(){

  this.transition(
    this.fromRoute('index'),
    this.toRoute('start'),
    this.use('upDown', { duration: 500 }),
    this.reverse('upDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('start'),
    this.toRoute('quiz'),
    this.use('upDown', { duration: 500 }),
    this.reverse('upDown', { duration: 500 })
    );

  //this.transition(
  //  this.fromRoute('quiz'),
  //  this.toRoute('quiz.index'),
  //  this.use('fade', { duration: 500 }),
  //  this.reverse('fade', { duration: 500 })
  //);

  this.transition(
    this.childOf('.liquid-bind-time'),
    this.use('toUp')
  );


  this.transition(
    this.fromRoute('quiz.q1'),
    this.toRoute('quiz.q1-1'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  // q1-1

  this.transition(
    this.fromRoute('quiz.q1-1'),
    this.toRoute('quiz.q1-2-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-1'),
    this.toRoute('quiz.q1-2-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  // q1-2

  this.transition(
    this.fromRoute('quiz.q1-2-up'),
    this.toRoute('quiz.q1-3-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-2-up'),
    this.toRoute('quiz.q1-3-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-2-down'),
    this.toRoute('quiz.q1-3-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-2-down'),
    this.toRoute('quiz.q1-3-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  // q1-3


  this.transition(
    this.fromRoute('quiz.q1-3-up'),
    this.toRoute('quiz.q1-4-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-3-up'),
    this.toRoute('quiz.q1-4-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-3-down'),
    this.toRoute('quiz.q1-4-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-3-down'),
    this.toRoute('quiz.q1-4-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  // q1-4      


  this.transition(
    this.fromRoute('quiz.q1-4-up'),
    this.toRoute('quiz.q1-5-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-4-up'),
    this.toRoute('quiz.q1-5-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-4-down'),
    this.toRoute('quiz.q1-5-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-4-down'),
    this.toRoute('quiz.q1-5-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  // q1-5   


  this.transition(
    this.fromRoute('quiz.q1-5-up'),
    this.toRoute('quiz.q2-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-5-up'),
    this.toRoute('quiz.q2-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-5-down'),
    this.toRoute('quiz.q2-up'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q1-5-down'),
    this.toRoute('quiz.q2-down'),
    this.use('toDown', { duration: 500 }),
    this.reverse('toUp', { duration: 500 })
    );

  // q2

  this.transition(
    this.fromRoute('quiz.q2'),
    this.toRoute('quiz.q2-1'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q2-1'),
    this.toRoute('quiz.q2-2'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );


  this.transition(
    this.fromRoute('quiz.q2-2'),
    this.toRoute('quiz.q3'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );


  this.transition(
    this.fromRoute('quiz.q3'),
    this.toRoute('quiz.q3-1'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );


  this.transition(
    this.fromRoute('quiz.q3-1'),
    this.toRoute('quiz.q3-2'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    ); 


  this.transition(
    this.fromRoute('quiz.q3-1'),
    this.toRoute('quiz.q3-3'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    ); 


  this.transition(
    this.fromRoute('quiz.q3-2'),
    this.toRoute('quiz.q3-3'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );   


  this.transition(
    this.fromRoute('quiz.q3-3'),
    this.toRoute('quiz.q4'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    ); 


  this.transition(
    this.fromRoute('quiz.q4'),
    this.toRoute('quiz.q4-1'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    ); 

  // q4-1

  this.transition(
    this.fromRoute('quiz.q4-1'),
    this.toRoute('quiz.q4-2-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-1'),
    this.toRoute('quiz.q4-2-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );



  // q4-2  

  this.transition(
    this.fromRoute('quiz.q4-2-left'),
    this.toRoute('quiz.q4-3-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-2-left'),
    this.toRoute('quiz.q4-3-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-2-right'),
    this.toRoute('quiz.q4-3-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-2-right'),
    this.toRoute('quiz.q4-3-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  // q4-3

  this.transition(
    this.fromRoute('quiz.q4-3-left'),
    this.toRoute('quiz.q4-4-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-3-left'),
    this.toRoute('quiz.q4-4-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-3-right'),
    this.toRoute('quiz.q4-4-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-3-right'),
    this.toRoute('quiz.q4-4-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  // q4-4

  this.transition(
    this.fromRoute('quiz.q4-4-left'),
    this.toRoute('quiz.q4-5'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-4-right'),
    this.toRoute('quiz.q4-5'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );


  // q4-5

  this.transition(
    this.fromRoute('quiz.q4-5'),
    this.toRoute('quiz.q4-6-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-5'),
    this.toRoute('quiz.q4-6-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );


  // q4-6

  this.transition(
    this.fromRoute('quiz.q4-6-left'),
    this.toRoute('quiz.q4-7-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-6-left'),
    this.toRoute('quiz.q4-7-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-6-right'),
    this.toRoute('quiz.q4-7-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-6-right'),
    this.toRoute('quiz.q4-7-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  // q4-7

  this.transition(
    this.fromRoute('quiz.q4-7-left'),
    this.toRoute('quiz.q5-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-7-left'),
    this.toRoute('quiz.q5-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-7-right'),
    this.toRoute('quiz.q5-left'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q4-7-right'),
    this.toRoute('quiz.q5-right'),
    this.use('toRight', { duration: 500 }),
    this.reverse('toLeft', { duration: 500 })
    );

  // q5                              
  

  this.transition(
    this.fromRoute('quiz.q5-left'),
    this.toRoute('quiz.result'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );

  this.transition(
    this.fromRoute('quiz.q5-right'),
    this.toRoute('quiz.result'),
    this.use('toLeft', { duration: 500 }),
    this.reverse('toRight', { duration: 500 })
    );
}