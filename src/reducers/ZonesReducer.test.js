import ZonesReducer from './ZonesReducer';
import * as types from '../actions/index';

describe('ZonesReducer', ()=>{
  it('should handle initial state', ()=>{
    expect(
      ZonesReducer(undefined, {})
    ).toEqual({
      all: [], 
      zone: null, 
      comments: [], 
      coordinates: [] 
    })
  })

  it('should handle CREATE_ZONE_COMMENT',()=>{
    expect(
      ZonesReducer({}, {
        type: types.CREATE_ZONE_COMMENT,
        payload: {
          data: {
            result: { 
              comments: ['Test Comment']
            }
          }
        }
      })).toEqual({
        comments: ['Test Comment']
      })
  })
})


