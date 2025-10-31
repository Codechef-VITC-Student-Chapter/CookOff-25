

const Clubs = {
  name: 'Clubs',
  title: 'LeaderBoard',
  type: 'document',
  initialValue: {
    SoloTeam: 'solo',
    Round1: 0,
    Round2: 0,
    Round3: 0,
  },
  fields: [
    {
      name: 'TeamName',
      title: 'Team Name',
      type: 'string',
    },
    {
      name: 'Slogan',
      type: 'string',
    },
    {
      name: 'College',
      type: 'string',
    },
    {
      name: 'SoloTeam',
      title: 'Solo or Team',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Solo', value: 'solo' },
          { title: 'Team', value: 'team' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'RegNo', title: 'Reg No', type: 'string' },
            { name: 'email', title: 'Email', type: 'string' },
          ],
        },
      ],
      hidden: ({ parent }) => parent?.SoloTeam === 'solo',
    },
    {
      name: 'Round1',
      title: 'Round 1 Points',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Round2',
      title: 'Round 2 Points',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Round3',
      title: 'Round 3 Points',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    },
    
  ],

  preview: {
    select: {
      title: 'TeamName',
      subtitle: 'College',
    },
  },
}

export default Clubs
