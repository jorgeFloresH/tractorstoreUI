import {inject, TestBed} from '@angular/core/testing';

import {ItemService} from './item.service';
// @ts-ignore
// @ts-ignore
import {beforeEach, describe, expect, it} from 'jasmine';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
