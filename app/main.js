Vue.component( 'redditpost', {
	template : '#post-template',

	props: ['comment', 'id', 'votes']
});


var demo = new Vue ({

	el: '#main',


	data: {

		newComment:'',

		posts: [

			{ 
				id: 1,
				comment: "Check out this link!!",
				votes: 2
			},
			{
				id: 2,
				comment: "Super cool dog tricks",
				votes: 20
			},
			{
				id: 3,
				comment: "random cat photos",
				votes: 9999
			}

		],

			nextId: 4,
	},
	methods: {

		addPost: function () {

			this.posts.push(
			{
				id: this.nextId++,
				comment: this.newComment
			});

			this.newComment ='';
			

		},


	}

});