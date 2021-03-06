const PageRes = require( '../model/pageRes' );

module.exports = {
  'GET /pageRes/res/file/:resId': async( ctx, next ) => {
    let pageRes = await PageRes.findOne( { where: { resId: ctx.params.resId } } );
    ctx.body = pageRes.resText;
  }
};