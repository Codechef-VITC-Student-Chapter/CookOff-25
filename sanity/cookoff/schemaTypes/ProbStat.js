const Probstat ={
     name: 'ProblemStatement',
  title: 'Problem Statement',
  type: 'document',
  initialValue:{
    View: false,
  },
  fields:[
    {
        name:'ProbStatNo',
        title:'Problem Statement Number',
        type:'number',
        validation: (Rule) => Rule.required(),
    },
    {
      name:'ProbStatTitle',
      title:'Problem Statement title',
      type:'string',
    validation: (Rule) => Rule.required(),},{
        name:'ProbStatDesc',
        title:'Problem Statement Description',
        type:'text',
        validation: (Rule) => Rule.required(),
      },
    {name:"View",
       title:"Hide or View",
         type:"boolean",
         validation: (Rule) => Rule.required(),
            
    }
  ]
}
export default Probstat;