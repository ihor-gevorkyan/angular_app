'use strict';

/* Services */

// About Service
phonecatApp.service('AboutService', function() {
      	this.services = function() {
	      	return [
			    {
					name: 'HTML5 / CSS3 (OOCSS, BEM, SMACSS)',
					description: 'HTML5 and CSS3 is the best specific for web pages as documents.',
					category: {
						name: 'frontend'
					},
					skills: [
						{
							name: 'canvas', value: 'junior'
						},
						{
							name: 'animations', value: 'junior'
						},
						{
							name: 'other', value: 'senior'
						}
					]
			    },
			    {
					name: 'JS / JQuery / AngularJS',
					description: 'JS is the best for creating dynamic pages',
					category: {
						name: 'frontend'
					},
					skills: [
						{
							name: 'OOP', value: 'middle'
						},
						{
							name: 'JQuery plugins', value: 'junior'
						},
						{
							name: 'other', value: 'senior'
						}
					]
			    },
			    {
					name: 'PHP / MySQL',
					description: 'PHP is the good serveral language',
					category: {
						name: 'backend'
					},
					skills: [
						{
							name: 'InnoDB', value: 'senior'
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
					name: 'Wordpress / Magento',
					description: 'Wordpress and Magento is the best of Content Managment Systems',
					category: {
						name: 'backend'
					},
					skills: [
						{
							name: 'extensions', value: 'junior'
						},
						{
							name: 'themes', value: 'middle'
						}
					]
			    },
			    {
					name: 'Yii2',
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