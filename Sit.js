
//Sitting code by minecraftpro33 Folllow me On Twitter: @angryspace321 Credits is Apreciated But not Required

var chair;  //variable for the chair's ent

function addBlockRenderType(renderer) //Creates a Very Small Mob 
{
var model = renderer.getModel();

var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();

body.setTextureOffset(0, 0);
body.addBox(0, 0, 0, 0, 0, 0);
}
var BlockRenderType = Renderer.createHumanoidRenderer();
addBlockRenderType(BlockRenderType);


function useItem(x,y,z,i,b,s){

if(b==53){ //When an Oak Stairs is Tapped

		Level.spawnMob(x+0.5,y+1,z+0.5,15); //Spawns a Villager
Entity.addEffect(chair,MobEffect.movementSlowdown,30*99999999999,9999999999,false); //Adds a Slowness to Prevent the Mob from moving

		rideAnimal(getPlayerEnt(), chair); //rides the entity on tap
}}

function entityAddedHook(entity){
if(Entity.getEntityTypeId(entity)==15)
{
chair=entity; //specifies what is chair
}}

function modTick(){

		Entity.setRenderType(chair, BlockRenderType.renderType); //Uses the Chair's render type
Entity.setCollisionSize(chair, 0.1, 0.1); // sets the hitbox to 0.1

}
