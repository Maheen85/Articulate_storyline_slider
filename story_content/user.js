function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LHQPZAnQKW":
        Script1();
        break;
      case "5bgjQ5QOAOq":
        Script2();
        break;
  }
}

function Script1()
{
  //Getting the player
const player = GetPlayer();



let total = player.GetVar("total_pv");
let old_s1 = player.GetVar("old_s1_pv");

let new_s1 = player.GetVar("s1_pv");

if(new_s1 > old_s1)
	{
		total++;
		player.SetVar("total_pv",total);
		old_s1++;
		player.SetVar("old_s1_pv",old_s1);
	}
else
	{
		total--;
		player.SetVar("total_pv",total);
		old_s1--;
		player.SetVar("old_s1_pv",old_s1);
	}


}

function Script2()
{
  //Getting the player
const player = GetPlayer();



let total = player.GetVar("total_pv");
let old_s2 = player.GetVar("old_s2_pv");

let new_s2 = player.GetVar("s2_pv");

if(new_s2 > old_s2)
	{
		total++;
		player.SetVar("total_pv",total);
		old_s2++;
		player.SetVar("old_s2_pv",old_s2);
	}
else
	{
		total--;
		player.SetVar("total_pv",total);
		old_s2--;
		player.SetVar("old_s2_pv",old_s2);
	}


}

