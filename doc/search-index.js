var searchIndex = {};
searchIndex["zero_sum"] = {"doc":"An analysis engine for zero-sum games.","items":[[0,"analysis","zero_sum","Contains the traits and tools to provide analysis of zero-sum games.",null,null],[0,"search","zero_sum::analysis","Tools for searching the game tree.",null,null],[3,"Analysis","zero_sum::analysis::search","The result of a search.",null,null],[12,"state","","A reference to the state on which the search was performed.",0,null],[12,"evaluation","","The evaluation of the state after applying the principal variation.",0,null],[12,"principal_variation","","The principal variation of the state.",0,null],[12,"stats","","Optional statistics from the search may be available for printing.",0,null],[3,"PvSearch","","A PVS implementation of `Search` with a few common optimizations.",null,null],[11,"new","","Creates a `PvSearch` without a target depth or time goal.  It will search until\nit finds a favorable resolution, or until the search is interrupted.",1,{"inputs":[],"output":{"name":"pvsearch"}}],[11,"with_depth","","Creates a `PvSearch` that will search to a maximum depth of `depth`.",1,{"inputs":[{"name":"u8"}],"output":{"name":"pvsearch"}}],[11,"with_goal","","Creates a `PvSearch` that will search until it predicts that it will exceed\n`goal` seconds with the next depth.  `branching_factor` is used to predict\nthe required time to search at the next depth.",1,{"inputs":[{"name":"u16"},{"name":"f32"}],"output":{"name":"pvsearch"}}],[11,"search","","",1,null],[8,"Search","","Provides search capabilities",null,null],[10,"search","","Generates an analysis of `state`.  `interrupt` is optionally provided to interrupt long searches.",2,null],[11,"fmt","","",0,null],[8,"Evaluatable","zero_sum::analysis","Provides evaluation capabilities.",null,null],[10,"evaluate","","Returns the evaluation of the current state.",3,null],[11,"evaluate_plies","","Returns the evaluation of the state after executing `plies`.",3,null],[8,"Evaluation","","An evaluation type.",null,null],[10,"null","","An empty, or zero evaluation.",4,{"inputs":[],"output":{"name":"self"}}],[10,"epsilon","","The smallest step to consider.",4,{"inputs":[],"output":{"name":"self"}}],[10,"win","","The base value of a win.  The evaluation system may add or subtract to it in\nin order to promote it or discourage it in favor of others in the search.",4,{"inputs":[],"output":{"name":"self"}}],[10,"max","","The maximum value representable.  This must be safely negatable.",4,{"inputs":[],"output":{"name":"self"}}],[10,"is_win","","Returns `true` if this evaluation contains a win.  This is usually a check to\nsee if the absolute value is above a certain threshold.",4,null],[8,"Extrapolatable","","Provides the possible plies from a given state.",null,null],[10,"extrapolate","","Returns a list of plies that should be considered from the current state.  The search\nsystem does not assume that all plies returned are correct.",5,null],[8,"Ply","zero_sum","This trait marks a ply.",null,null],[8,"Resolution","","A game&#39;s resolution.",null,null],[10,"is_win","","",6,null],[10,"is_draw","","",6,null],[8,"State","","The state of the game.",null,null],[10,"execute_ply_preallocated","","Executes a ply on the state, storing the resultant state in the preallocated `next`.\nIt is recommended to implement `Clone` on the `State` implementor manually,\nto take advantage of `Clone`&#39;s `clone_from` method in order to avoid costly\nallocations during a speed-critical search.",7,null],[10,"check_resolution","","Returns `None` if the game has not reached a conclusion.",7,null],[11,"execute_ply","","Clones the state and then calls `execute_ply_preallocated`.",7,null],[14,"prepare_evaluation_tuple","","Implement arithmetic operators (`Add`, `Sub`, `Mul`, `Neg`, `Div`) and `Display` for a tuple\nstruct in terms of the enclosed type.",null,null],[14,"impl_tuple_operation","","Implement a binary operation for a tuple struct in terms of the enclosed type.",null,null],[11,"evaluate_plies","zero_sum::analysis","Returns the evaluation of the state after executing `plies`.",3,null],[11,"execute_ply","zero_sum","Clones the state and then calls `execute_ply_preallocated`.",7,null]],"paths":[[3,"Analysis"],[3,"PvSearch"],[8,"Search"],[8,"Evaluatable"],[8,"Evaluation"],[8,"Extrapolatable"],[8,"Resolution"],[8,"State"]]};
initSearch(searchIndex);