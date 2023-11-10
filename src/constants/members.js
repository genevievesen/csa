import {images} from '../constants';

const exec_team = [
    {
        image: images.exec_trav,
        name: 'Travis Sheldon',
        title: 'Chief Mountain Guide, First Chair Enforcer',
    },
    {
        image: images.exec_dave,
        name: 'David Stauffer',
        title: 'Head of Logistics, Chief Meteorologist',
    },
    {
        image: images.exec_lp,
        name: 'Lauren Planas',
        title: 'Head of Culinary, Executive Chef & Chief Baker',
    },
    {
        image: images.exec_daylen,
        name: 'Daylen Smith',
        title: 'Chief Mixologist',
    },
    {
        image: images.exec_genna,
        name: 'Genna Senecal',
        title: 'Chief Technology Officer',
    },
];

const members = [
    {
        name: 'Nate Steele',
    },
    {
        name: 'Andrew Steele',
    },
    {
        name: 'Eric Davis',
    },
    {
        name: 'Edmee Ernoult',
    },
    {
        name: 'Rachel Philips',
    },
    {
        name: 'Brit Sharon',
    },
    {
        name: 'Brooke Morton',
    },
    {
        name: 'Jackson Walsh',
    },
    {
        name: 'Sophie Layton',
    },
    {
        name: 'Max Pollinger',
    },
    {
        name: 'Addison Williams',
    },
    {
        name: 'Liam Schilling',
    },
    {
        name: 'David Stauffer',
    },    
    {
        name: 'Lauren Planas',
    },    
    {
        name: 'Travis Sheldon',
    },    
    {
        name: 'Daylen Smith',
    },    
    {
        name: 'Genna Senecal',
    },    
];

// order an array of objects with name
members.sort(function (a, b) {
    const full_namea = a.name.split(' ');
    const full_nameb = b.name.split(' ');
    
    if (full_namea[1] < full_nameb[1]) {
      return -1;
    }
    if (full_namea[1] > full_nameb[1]) {
      return 1;
    }
    return 0;
  });

members.sort();

export default {exec_team, members};