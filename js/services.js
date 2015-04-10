'use strict';

/* Services */

// Technologies Service
phonecatApp.service('TechnologiesService', function() {
  	this.services = function() {
      	return [
		    {
				title: 'HTML5 / CSS3 (OOCSS, BEM, SMACSS)',
				description: 'HTML5 and CSS3 is the best specific for web pages as documents.',
				category: {
					name: 'frontend'
				},
				skills: [
					{
						name: 'canvas', value: 'junior'
					},
					{
						name: 'animations', value: 'middle'
					},
					{
						name: 'other', value: 'senior'
					}
				]
		    },
		    {
				title: 'JS / JQuery / AngularJS',
				description: 'JS is the best for creating dynamic pages',
				category: {
					name: 'frontend'
				},
				skills: [
					{
						name: 'OOP', value: 'junior'
					},
					{
						name: 'JQuery plugins', value: 'senior'
					},
					{
						name: 'other', value: 'middle'
					}
				]
		    },
		    {
				title: 'PHP / MySQL',
				description: 'PHP is the good serveral language',
				category: {
					name: 'backend'
				},
				skills: [
					{
						name: 'InnoDB', value: 'middle'
					},
					{
						name: 'ORM', value: 'junior'
					},
					{
						name: 'PDO', value: 'middle'
					}
				]
		    },
		    {
				title: 'Wordpress / Magento',
				description: 'Wordpress and Magento is the best of Content Managment Systems',
				category: {
					name: 'backend'
				},
				skills: [
					{
						name: 'extensions', value: 'middle'
					},
					{
						name: 'themes', value: 'middle'
					}
				]
		    },
		    {
				title: 'Yii2',
				description: 'Is a greate PHP framework',
				category: {
					name: 'backend'
				},
				skills: [
					{
						name: 'extensions', value: 'junior'
					},
					{
						name: 'themes', value: 'junior'
					}
				]
		    }
	  	];
	}
})


// Categories of technologies Service
phonecatApp.service('CategoriesService', function() {
  	this.categories = function() {
      	return [
      		{
				name: 'all'
		    },
		    {
				name: 'frontend'
		    },
		    {
				name: 'backend'
		    },
	  	];
	}
})


// Categories of technologies Service
phonecatApp.service('SkillsService', function() {
  	this.skills = function() {
      	return [
      		{
				name: 'all'
		    },
		    {
				name: 'junior'
		    },
		    {
				name: 'middle'
		    },
		    {
				name: 'senior'
		    }
	  	];
	}
})
