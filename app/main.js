Vue.component( 'redditpost', {
	template : '<li>{{ comment }} {{ id }}</li>',

	props: ['comment', 'id']
});


var demo = new Vue ({

	el: '#main',


	data: {

		newComment:'',

		posts: [

			{ 
				id: 1,
				comment: "Check out this link!!"
			},
			{
				id: 2,
				comment: "Super cool dog tricks"
			},
			{
				id: 3,
				comment: "random cat photos"
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