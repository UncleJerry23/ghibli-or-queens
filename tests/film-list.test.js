const test = QUnit.test;

QUnit.module('film template');

import { filmTemplate } from '../src/film-template.js';

test('html for one film', assert => {
    // arrange
    const film = { title: 'Castle in the sky', release_date: '1986', id: '12345' };

    // act
    const result = filmTemplate(film);

    // assert
    assert.htmlEqual(result, `
    <li>
        <a href="./film-detail.html?id=12345">Castle in the sky</a> <strong>(1986)</strong>
    </li>
    `);
});