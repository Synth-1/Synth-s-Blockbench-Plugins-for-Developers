const FA_EXPR_SOURCE = "[\r\n  {\r\n    \"root.sy\": \"1+if(varb.21_2_plus,var.root_sy,0)\",\r\n    \"root.sx\": \"1+if(varb.21_2_plus,var.root_sx,0)\",\r\n    \"root.sz\": \"1+if(varb.21_2_plus,var.root_sz,0)\",\r\n    \"root.ry\": \"if(varb.21_2_plus,var.root_ry,0)\",\r\n    \"root.rx\": \"if(varb.21_2_plus,var.root_rx,0)\",\r\n    \"root.rz\": \"if(varb.21_2_plus,var.root_rz,0)\",\r\n    \"root.tx\": \"if(varb.21_2_plus,var.root_tx,0)\",\r\n    \"root.ty\": \"if(varb.21_2_plus,var.root_ty-(root.sy-1)*24,0)\",\r\n    \"root.tz\": \"if(varb.21_2_plus,var.root_tz,0)\"\r\n  },\r\n  {\r\n    \"var.body_rx\": \"if(varb.21_2_plus,0,var.root_rx)+var.idl_bodyrx+var.mvmnt_bodyrx+var.udrwtr_bodyrx+var.vrtcl_bodyrx+var.fly_bodyrx+var.eqp_bodyrx\",\r\n    \"var.body_ry\": \"if(varb.21_2_plus,0,var.root_ry/3)+var.idl_bodyry+var.mvmnt_bodyry+var.udrwtr_bodyry+var.vrtcl_bodyry+var.gldng_bodyry+var.eqp_bodyry\",\r\n    \"var.body_rz\": \"if(varb.21_2_plus,0,var.root_rz/2)+var.mvmnt_bodyrz+var.udrwtr_bodyrz+var.vrtcl_bodyrz+var.gldng_bodyrz+var.eqp_bodyrz\",\r\n    \"var.body_tx\": \"sin(var.body_rz)*12+var.idl_bodytx+var.mvmnt_bodytx+var.udrwtr_bodytx+var.gldng_bodytx+var.vrtcl_bodytx+var.eqp_bodytx\",\r\n    \"var.body_ty\": \"-cos(var.body_rx)*12+12-cos(var.body_rz)*12+12-2*var.sneak2+var.idl_bodyty+var.mvmnt_bodyty+var.udrwtr_bodyty+var.vrtcl_bodyty+var.fly_bodyty\",\r\n    \"var.body_tz\": \"-sin(var.body_rx)*12+var.idl_bodytz+var.mvmnt_bodytz+var.udrwtr_bodytz+var.gldng_bodytz+var.vrtcl_bodytz\",\r\n    \"body.rx\": \"var.body_rx\",\r\n    \"body.ry\": \"var.body_ry\",\r\n    \"body.rz\": \"var.body_rz\",\r\n    \"body.tx\": \"var.body_tx\",\r\n    \"body.ty\": \"var.body_ty\",\r\n    \"body.tz\": \"var.body_tz\",\r\n    \"var.head_rx\": \"if(varb.21_2_plus,clamp(-var.root_rx*(1-0.2*var.tread),-pi/3,pi/3),0)+var.idl_headrx+var.mvmnt_headrx+var.udrwtr_headrx+var.gldng_headrx+var.fly_headrx+var.vrtcl_headrx+if(!is_gliding&&var.gliding>0,pi/2*var.gliding,0)\",\r\n    \"var.head_ry\": \"(var.root_ry-var.climb_direction*var.climb)*(1-var.swim)+var.idl_headry+var.mvmnt_headry+var.gldng_headry\",\r\n    \"var.head_rz\": \"if(varb.21_2_plus,-var.root_rz/2,0)+var.idl_headrz+var.gldng_headrz\",\r\n    \"var.head_tx\": \"body.tx\",\r\n    \"var.head_ty\": \"body.ty+var.idl_headty+var.mvmnt_headty+var.vrtcl_headty\",\r\n    \"var.head_tz\": \"body.tz+var.mvmnt_headtz\",\r\n    \"head.rx\": \"var.head_rx\",\r\n    \"head.ry\": \"var.head_ry\",\r\n    \"head.rz\": \"var.head_rz\",\r\n    \"head.tx\": \"var.head_tx\",\r\n    \"head.ty\": \"var.head_ty\",\r\n    \"head.tz\": \"var.head_tz\"\r\n  },\r\n  {\r\n    \"right_arm.rx\": \"if(is_first_person_hand,var.fp_rarmrx,-var.root_rx*(if(varb.21_2_plus,1,0)-var.swim)+(var.idl_rarmrx+var.mvmnt_rarmrx+var.udrwtr_rarmrx+var.gldng_rarmrx+var.vrtcl_rarmrx+var.fly_rarmrx+var.eqp_rarmrx)*(1-var.ractionT*var.ractionT)+var.spr_rarmrx)+var.RarmRX_drag*(var.ractionT*var.ractionT)\",\r\n    \"left_arm.rx\": \"if(is_first_person_hand,var.fp_larmrx,-var.root_rx*(if(varb.21_2_plus,1,0)-var.swim)+(var.idl_larmrx+var.mvmnt_larmrx+var.udrwtr_larmrx+var.gldng_larmrx+var.vrtcl_larmrx+var.fly_larmrx+var.eqp_larmrx)*(1-var.lactionT*var.lactionT)+var.spr_larmrx)+var.LarmRX_drag*(var.lactionT*var.lactionT)\",\r\n    \"right_arm.ry\": \"if(is_first_person_hand,var.fp_rarmry,if(varb.21_2_plus,0,var.root_ry/3)+(var.idl_rarmry+var.mvmnt_rarmry+var.udrwtr_rarmry+var.gldng_rarmry+var.vrtcl_rarmry+var.fly_rarmry+var.eqp_rarmry)*(1-var.ractionT*var.ractionT))+var.RarmRY_drag*(var.ractionT*var.ractionT)\",\r\n    \"left_arm.ry\": \"if(is_first_person_hand,var.fp_larmry,if(varb.21_2_plus,0,var.root_ry/3)+(var.idl_larmry+var.mvmnt_larmry+var.udrwtr_larmry+var.gldng_larmry+var.vrtcl_larmry+var.fly_larmry+var.eqp_larmry)*(1-var.lactionT*var.lactionT))+var.LarmRY_drag*(var.lactionT*var.lactionT)\",\r\n    \"right_arm.rz\": \"if(is_first_person_hand,var.fp_rarmrz,if(varb.21_2_plus,0,var.root_rz/2)+(var.idl_rarmrz+var.mvmnt_rarmrz+var.udrwtr_rarmrz+var.gldng_rarmrz+var.vrtcl_rarmrz+var.fly_rarmrz+var.eqp_rarmrz)*(1-var.ractionT*var.ractionT))+var.RarmRZ_drag*(var.ractionT*var.ractionT)\",\r\n    \"left_arm.rz\": \"if(is_first_person_hand,var.fp_larmrz,if(varb.21_2_plus,0,var.root_rz/2)+(var.idl_larmrz+var.mvmnt_larmrz+var.udrwtr_larmrz+var.gldng_larmrz+var.vrtcl_larmrz+var.fly_larmrz+var.eqp_larmrz)*(1-var.lactionT*var.lactionT))+var.LarmRZ_drag*(var.lactionT*var.lactionT)\",\r\n    \"right_arm.tx\": \"if(is_first_person_hand,var.fp_rarmtx,body.tx+(-cos(var.body_ry)*5+5)*(var.idle+var.ractionT+var.gliding)-5+var.idl_rarmtx+var.mvmnt_rarmtx+var.udrwtr_rarmtx+var.vrtcl_rarmtx)+(right_arm.tx+5)*(var.ractionT*var.ractionT)\",\r\n    \"left_arm.tx\": \"if(is_first_person_hand,var.fp_larmtx,body.tx+(cos(var.body_ry)*5-5)*(var.idle+var.lactionT+var.gliding)+5+var.idl_larmtx+var.mvmnt_larmtx+var.udrwtr_larmtx+var.vrtcl_larmtx)+(left_arm.tx-5)*(var.lactionT*var.lactionT)\",\r\n    \"right_arm.ty\": \"if(is_first_person_hand,var.fp_rarmty,body.ty+cos(var.body_rx)*2-2+2+var.idl_rarmty+var.mvmnt_rarmty+var.udrwtr_rarmty+var.vrtcl_rarmty)+(right_arm.ty-2*var.sneak2-2)*(var.ractionT*var.ractionT)\",\r\n    \"left_arm.ty\": \"if(is_first_person_hand,var.fp_larmty,body.ty+cos(var.body_rx)*2-2+2+var.idl_larmty+var.mvmnt_larmty+var.udrwtr_larmty+var.vrtcl_larmty)+(left_arm.ty-2*var.sneak2-2)*(var.lactionT*var.lactionT)\",\r\n    \"right_arm.tz\": \"if(is_first_person_hand,var.fp_larmtz,body.tz+sin(var.body_rx)*2+(sin(var.body_ry)*5)*(var.idle+var.ractionT+var.gliding)+var.idl_rarmtz+var.mvmnt_rarmtz+var.udrwtr_rarmtz+var.vrtcl_rarmtz+var.fly_rarmtz+var.eqp_rarmtz)+(right_arm.tz)*(var.ractionT*var.ractionT)\",\r\n    \"left_arm.tz\": \"if(is_first_person_hand,var.fp_larmtz,body.tz+sin(var.body_rx)*2+(-sin(var.body_ry)*5)*(var.idle+var.lactionT+var.gliding)+var.idl_larmtz+var.mvmnt_larmtz+var.udrwtr_larmtz+var.vrtcl_larmtz+var.fly_larmtz+var.eqp_larmtz)+(left_arm.tz)*(var.lactionT*var.lactionT)\"\r\n  },\r\n  {\r\n    \"var.right_footrx\": \"var.idl_rfootrx+var.mvmnt_rfootrx+var.vrtcl_rfootrx+var.eqp_rfootrx\",\r\n    \"var.left_footrx\": \"var.idl_lfootrx+var.mvmnt_lfootrx+var.vrtcl_lfootrx+var.eqp_lfootrx\",\r\n    \"var.right_footry\": \"var.idl_rfootry+var.mvmnt_rfootry+var.eqp_rfootry\",\r\n    \"var.left_footry\": \"var.idl_lfootry+var.mvmnt_lfootry+var.eqp_lfootry\",\r\n    \"var.right_footrz\": \"var.idl_rfootrz+var.mvmnt_rfootrz\",\r\n    \"var.left_footrz\": \"var.idl_lfootrz+var.mvmnt_lfootrz\",\r\n    \"right_leg.rx\": \"var.right_footrx-var.root_rx*(1-var.tread*if(varb.21_2_plus,1,1.5)-var.flying)+var.idl_rlegrx+var.mvmnt_rlegrx+var.udrwtr_rlegrx+var.gldng_rlegrx+var.vrtcl_rlegrx+var.fly_rlegrx\",\r\n    \"left_leg.rx\": \"var.left_footrx-var.root_rx*(1-var.tread*if(varb.21_2_plus,1,1.5)-var.flying)+var.idl_llegrx+var.mvmnt_llegrx+var.udrwtr_llegrx+var.gldng_llegrx+var.vrtcl_llegrx+var.fly_llegrx\",\r\n    \"right_leg.ry\": \"var.right_footry+if(varb.21_2_plus,0,var.root_ry/3)+var.idl_rlegry+var.mvmnt_rlegry+var.udrwtr_rlegry+var.gldng_rlegry+var.vrtcl_rlegry+var.fly_rlegry\",\r\n    \"left_leg.ry\": \"var.left_footry+if(varb.21_2_plus,0,var.root_ry/3)+var.idl_llegry+var.mvmnt_llegry+var.udrwtr_llegry+var.gldng_llegry+var.vrtcl_llegry+var.fly_llegry\",\r\n    \"right_leg.rz\": \"var.right_footrz+if(varb.21_2_plus,0,var.root_rz/2)+right_leg.rx*right_leg.ry*(1-var.sit)+var.idl_rlegrz+var.mvmnt_rlegrz+var.udrwtr_rlegrz+var.gldng_rlegrz+var.vrtcl_rlegrz+var.fly_rlegrz\",\r\n    \"left_leg.rz\": \"var.left_footrz+if(varb.21_2_plus,0,var.root_rz/2)+left_leg.rx*left_leg.ry*(1-var.sit)+var.idl_llegrz+var.mvmnt_llegrz+var.udrwtr_llegrz+var.gldng_llegrz+var.vrtcl_llegrz+var.fly_llegrz\",\r\n    \"right_leg.tx\": \"-2+(-sin(var.right_footrx)*12)*right_leg.ry+(sin(var.right_footrz)*12)+var.idl_rlegtx+var.mvmnt_rlegtx+var.udrwtr_rlegtx+var.gldng_rlegtx+var.vrtcl_rlegtx\",\r\n    \"left_leg.tx\": \"2+(-sin(var.left_footrx)*12)*left_leg.ry+(sin(var.left_footrz)*12)+var.idl_llegtx+var.mvmnt_llegtx+var.udrwtr_llegtx+var.gldng_llegtx+var.vrtcl_llegtx\",\r\n    \"right_leg.ty\": \"12+(-cos(var.right_footrx)*12+12)-2*var.sneak2+(-cos(var.right_footrz)*12+12)+var.idl_rlegty+var.mvmnt_rlegty+var.udrwtr_rlegty+var.vrtcl_rlegty+var.fly_rlegty\",\r\n    \"left_leg.ty\": \"12+(-cos(var.left_footrx)*12+12)-2*var.sneak2+(-cos(var.left_footrz)*12+12)+var.idl_llegty+var.mvmnt_llegty+var.udrwtr_llegty+var.vrtcl_llegty+var.fly_llegty\",\r\n    \"right_leg.tz\": \"(-sin(var.right_footrx)*12)+var.idl_rlegtz+var.mvmnt_rlegtz+var.udrwtr_rlegtz+var.gldng_rlegtz+var.vrtcl_rlegtz+var.fly_rlegtz\",\r\n    \"left_leg.tz\": \"(-sin(var.left_footrx)*12)+var.idl_llegtz+var.mvmnt_llegtz+var.udrwtr_llegtz+var.gldng_llegtz+var.vrtcl_llegtz+var.fly_llegtz\",\r\n    \"right_leg.sy\": \"1+var.vrtcl_rlegsy\",\r\n    \"left_leg.sy\": \"1+var.vrtcl_llegsy\"\r\n  },\r\n  {\r\n    \"headwear.rx\": \"if(varb.21_2_plus,0,head.rx)\",\r\n    \"headwear.ry\": \"if(varb.21_2_plus,0,head.ry)\",\r\n    \"headwear.rz\": \"if(varb.21_2_plus,0,head.rz)\",\r\n    \"headwear.tx\": \"if(varb.21_2_plus,0,head.tx)\",\r\n    \"headwear.ty\": \"if(varb.21_2_plus,0,head.ty)\",\r\n    \"headwear.tz\": \"if(varb.21_2_plus,0,head.tz)\",\r\n    \"headwear.sx\": \"if(varb.21_2_plus,1,head.sx)\",\r\n    \"headwear.sy\": \"if(varb.21_2_plus,1,head.sy)\",\r\n    \"headwear.sz\": \"if(varb.21_2_plus,1,head.sz)\",\r\n    \"jacket.rx\": \"if(varb.21_2_plus,0,body.rx)\",\r\n    \"jacket.ry\": \"if(varb.21_2_plus,0,body.ry)\",\r\n    \"jacket.rz\": \"if(varb.21_2_plus,0,body.rz)\",\r\n    \"jacket.tx\": \"if(varb.21_2_plus,0,body.tx)\",\r\n    \"jacket.ty\": \"if(varb.21_2_plus,0,body.ty)\",\r\n    \"jacket.tz\": \"if(varb.21_2_plus,0,body.tz)\",\r\n    \"jacket.sx\": \"if(varb.21_2_plus,1,body.sx)\",\r\n    \"jacket.sy\": \"if(varb.21_2_plus,1,body.sy)\",\r\n    \"jacket.sz\": \"if(varb.21_2_plus,1,body.sz)\",\r\n    \"right_sleeve.rx\": \"if(varb.21_2_plus,0,right_arm.rx)\",\r\n    \"right_sleeve.ry\": \"if(varb.21_2_plus,0,right_arm.ry)\",\r\n    \"right_sleeve.rz\": \"if(varb.21_2_plus,0,right_arm.rz)\",\r\n    \"right_sleeve.tx\": \"if(varb.21_2_plus,0,right_arm.tx)\",\r\n    \"right_sleeve.ty\": \"if(varb.21_2_plus,0,right_arm.ty)\",\r\n    \"right_sleeve.tz\": \"if(varb.21_2_plus,0,right_arm.tz)\",\r\n    \"right_sleeve.sx\": \"if(varb.21_2_plus,1,right_arm.sx)\",\r\n    \"right_sleeve.sy\": \"if(varb.21_2_plus,1,right_arm.sy)\",\r\n    \"right_sleeve.sz\": \"if(varb.21_2_plus,1,right_arm.sz)\",\r\n    \"left_sleeve.rx\": \"if(varb.21_2_plus,0,left_arm.rx)\",\r\n    \"left_sleeve.ry\": \"if(varb.21_2_plus,0,left_arm.ry)\",\r\n    \"left_sleeve.rz\": \"if(varb.21_2_plus,0,left_arm.rz)\",\r\n    \"left_sleeve.tx\": \"if(varb.21_2_plus,0,left_arm.tx)\",\r\n    \"left_sleeve.ty\": \"if(varb.21_2_plus,0,left_arm.ty)\",\r\n    \"left_sleeve.tz\": \"if(varb.21_2_plus,0,left_arm.tz)\",\r\n    \"left_sleeve.sx\": \"if(varb.21_2_plus,1,left_arm.sx)\",\r\n    \"left_sleeve.sy\": \"if(varb.21_2_plus,1,left_arm.sy)\",\r\n    \"left_sleeve.sz\": \"if(varb.21_2_plus,1,left_arm.sz)\",\r\n    \"right_pants.rx\": \"if(varb.21_2_plus,0,right_leg.rx)\",\r\n    \"right_pants.ry\": \"if(varb.21_2_plus,0,right_leg.ry)\",\r\n    \"right_pants.rz\": \"if(varb.21_2_plus,0,right_leg.rz)\",\r\n    \"right_pants.tx\": \"if(varb.21_2_plus,0,right_leg.tx)\",\r\n    \"right_pants.ty\": \"if(varb.21_2_plus,0,right_leg.ty)\",\r\n    \"right_pants.tz\": \"if(varb.21_2_plus,0,right_leg.tz)\",\r\n    \"right_pants.sx\": \"if(varb.21_2_plus,1,right_leg.sx)\",\r\n    \"right_pants.sy\": \"if(varb.21_2_plus,1,right_leg.sy)\",\r\n    \"right_pants.sz\": \"if(varb.21_2_plus,1,right_leg.sz)\",\r\n    \"left_pants.rx\": \"if(varb.21_2_plus,0,left_leg.rx)\",\r\n    \"left_pants.ry\": \"if(varb.21_2_plus,0,left_leg.ry)\",\r\n    \"left_pants.rz\": \"if(varb.21_2_plus,0,left_leg.rz)\",\r\n    \"left_pants.tx\": \"if(varb.21_2_plus,0,left_leg.tx)\",\r\n    \"left_pants.ty\": \"if(varb.21_2_plus,0,left_leg.ty)\",\r\n    \"left_pants.tz\": \"if(varb.21_2_plus,0,left_leg.tz)\",\r\n    \"left_pants.sx\": \"if(varb.21_2_plus,1,left_leg.sx)\",\r\n    \"left_pants.sy\": \"if(varb.21_2_plus,1,left_leg.sy)\",\r\n    \"left_pants.sz\": \"if(varb.21_2_plus,1,left_leg.sz)\"\r\n  }\r\n]";

const PARTS = ['head', 'body', 'right_arm', 'left_arm', 'right_leg', 'left_leg', 'headwear', 'jacket', 'right_sleeve', 'left_sleeve', 'right_pants', 'left_pants'];
const RENAMES = {
  egjh9rightleg: 'right_leg', egjh9leftleg: 'left_leg',
  egjh9rightarm: 'right_arm', egjh9leftarm: 'left_arm', egjh9body: 'body'
};
const FA_MODELS = [
  {part:'root', id:'root', invertAxis:'xy', translate:[0,0,0], model:'a_player_variables.jpm'},
  {part:'root', id:'root', invertAxis:'xy', translate:[0,0,0], model:'a_player_idle.jpm'},
  {part:'root', id:'root', invertAxis:'xy', translate:[0,0,0], model:'a_player_equipment.jpm'},
  {part:'root', id:'root', invertAxis:'xy', translate:[0,0,0], model:'a_player_movement.jpm'},
  {part:'root', id:'root', invertAxis:'xy', translate:[0,0,0], model:'a_player_firstperson.jpm'},
  {part:'head', id:'head', invertAxis:'xy', translate:[0,0,0], model:'player_face.jpm'}
];

function allGroups() {
  return Outliner.root.filter(node => node instanceof Group).flatMap(root => [root, ...root.children.filter(node => node instanceof Group)]);
}
function groupsDeep() {
  const result = [];
  function visit(nodes) { (nodes || []).forEach(node => { if (node instanceof Group) { result.push(node); visit(node.children); } }); }
  visit(Outliner.root);
  return result;
}
function normalized(name) { return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }
function notify(message) { Blockbench.showMessageBox({title:'Morph converter', message}); }
function ensureGroups() {
  const existing = groupsDeep();
  let added = 0;
  PARTS.forEach(name => {
    if (existing.some(group => normalized(group.name) === normalized(name))) return;
    new Group({name, origin:[0,0,0]}).init().addTo('root');
    added++;
  });
  return added;
}
function fixParts() {
  if (!Project || !Outliner) { notify('Önce bir proje aç.'); return; }
  let renamed = 0, moved = 0;
  const map = {...RENAMES};
  groupsDeep().forEach(group => {
    const key = normalized(group.name);
    if (map[key] && group.name !== map[key]) {
      group.name = map[key]; group.saveName();
      if (group.parent) { group.removeFromParent(); group.addTo('root'); moved++; }
      renamed++;
    }
  });
  const added = ensureGroups();
  if (typeof Canvas !== 'undefined') Canvas.updateAll();
  Blockbench.dispatchEvent('update_selection');
  notify(`Tamamlandı. ${renamed} grup yeniden adlandırıldı, ${moved} grup üst seviyeye taşındı, ${added} eksik parça eklendi.`);
}
function fixRotations() {
  if (!Project || !Outliner) { notify('Önce bir proje aç.'); return; }
  const formatId = String(Project.format?.id || Format?.id || '').toLowerCase();
  if (!formatId.startsWith('bedrock')) {
    notify('Fix rotations yalnızca Bedrock model projelerinde çalışır.');
    return;
  }
  const rotated = Cube.all.filter(cube => Array.isArray(cube.rotation) && cube.rotation.some(value => Math.abs(Number(value) || 0) > 1e-6));
  if (!rotated.length) { notify('Rotasyonu olan küp bulunamadı.'); return; }
  Undo.initEdit({outliner:true, elements:rotated});
  rotated.forEach(cube => {
    const rotation = cube.rotation.slice();
    const origin = Array.isArray(cube.origin) ? cube.origin.slice() : [0,0,0];
    const parent = Group.all.find(candidate => candidate.uuid === cube.parent) || 'root';
    const group = new Group({name:`${cube.name || 'cube'}_rotation`, origin, rotation}).init().addTo(parent);
    cube.addTo(group);
    cube.rotation = [0,0,0];
  });
  Undo.finishEdit('Move cube rotations to groups');
  Canvas.updateAll();
  Blockbench.dispatchEvent('update_selection');
  notify(`${rotated.length} küpün rotasyonu yeni gruplara taşındı.`);
}
function addFASupport() {
  if (!Project || !Outliner) { notify('Önce bir proje aç.'); return; }
  ensureGroups();
  const parsed = JSON.parse(FA_EXPR_SOURCE);
  const groupFor = name => groupsDeep().find(group => normalized(group.name) === normalized(name));
  const usedRoots = new Set();
  const rootGroups = groupsDeep().filter(group => normalized(group.name) === 'root');
  FA_MODELS.filter(entry => entry.part === 'root').forEach(entry => {
    let group = rootGroups.find(candidate => candidate.fa_support_model?.model === entry.model && !usedRoots.has(candidate));
    if (!group) group = rootGroups.find(candidate => !usedRoots.has(candidate));
    if (!group) {
      group = new Group({name:'root', origin:[0,0,0]}).init().addTo('root');
      rootGroups.push(group);
    }
    group.name = 'root';
    group.fa_support_model = {...entry, translate:[...entry.translate]};
    group.cem_model = entry.model;
    usedRoots.add(group);
  });
  let playerHead = groupsDeep().find(group => normalized(group.name) === 'head' && group.cem_model !== 'player_face.jpm');
  if (!playerHead) playerHead = new Group({name:'head', origin:[0,0,0]}).init().addTo('root');
  playerHead.name = 'head';
  let faceHead = groupsDeep().find(group => group.cem_model === 'player_face.jpm');
  if (!faceHead) faceHead = new Group({name:'head', origin:[0,0,0]}).init().addTo('root');
  faceHead.name = 'head';
  faceHead.fa_support_model = {...FA_MODELS.find(entry => entry.part === 'head'), translate:[0,0,0]};
  faceHead.cem_model = 'player_face.jpm';
  Project.fa_support_models = FA_MODELS.map(entry => ({...entry, translate:[...entry.translate]}));
  const headExpressions = Object.assign({}, ...parsed);
  playerHead.cem_animations = parsed;
  playerHead.cem_emf_animation = Object.assign({}, playerHead.cem_emf_animation || {}, headExpressions);
  Project.fa_support_head_animation = playerHead.cem_emf_animation;
  playerHead.select();
  if (typeof Canvas !== 'undefined') Canvas.updateAll();
  Blockbench.dispatchEvent('update_selection');
  notify('Aynı adla beş ayrı root grubu ayrı JPM dosyalarına bağlandı; tüm kod head grubunun CEM/EMF animasyon editörüne eklendi.');
}

Plugin.register('player_parts_fa_support', {
  title: 'Morph converter',
  author: 'Synth',
  icon: 'accessibility_new',
  description: 'Convert player model parts and add Fresh Animations support.',
  version: '1.0.0',
  variant: 'both',
  onload() {
    this.fixAction = new Action('fix_player_body_parts', {name:'Fix body parts', icon:'accessibility_new', click:fixParts});
    this.faAction = new Action('add_fa_support', {name:'Add FA support', icon:'animation', click:addFASupport});
    this.rotationAction = new Action('fix_player_rotations', {name:'Fix rotations', icon:'3d_rotation', click:fixRotations});
    MenuBar.menus.tools.addAction(this.fixAction);
    MenuBar.menus.tools.addAction(this.faAction);
    MenuBar.menus.tools.addAction(this.rotationAction);
  },
  onunload() {
    this.fixAction?.delete();
    this.faAction?.delete();
    this.rotationAction?.delete();
  }
});





















