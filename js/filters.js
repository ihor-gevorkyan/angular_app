'use strict';

/* Filters */
phonecatApp
	.filter('mark', function() {
		return function(input) {
			return input ? '\u2713' : '\u2718';
		}
	}) // filter for Phone Details Page for attributes, which true or false, change them to icons
	.filter('servicesBySkills', function() {
		return function(services, filterBy) {

			var getSkill = function(skills, level) {
				var skill = {};
				for (var i = 0; i < skills.length; i++) {
					if (skills[i].value === level) {
						skill = skills[i];
					}
				}

				return skill.value;
			}

			return services.filter(function(element, index, array) {
				var category = (element.category.name === filterBy.category.name || filterBy.category.name === 'all');
				var skill = (filterBy.skill.name === 'all' || getSkill(element.skills, filterBy.skill.name));

				return category && skill;
			})
		}
	}) // filter for about page with use category and skill level filter
	.filter('status', function() {
		return function(input) {
			return input ? 'in proccess' : 'in pending';
		}
	}) // filter for Phone Details Page for attributes, which true or false, change them to icons