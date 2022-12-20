function solution(T, R) {
  let groups = [],
    sortedGroups = [];
  let passed = 0,
    result;

  for (let i = 0; i < T.length; i++) {
    groups.push({
      groupname: T[i]
        .slice(T[i].match(/[0-9]/).index, T[i].length)
        .toLowerCase(),
      status: R[i].toLowerCase(),
    });
  }

  while (groups.length !== 0) {
    let filteredgroup = groups.filter(
      (group) => group.groupname[0] === groups[0].groupname[0]
    );
    groups = groups.filter(
      (group) => group.groupname[0] !== groups[0].groupname[0]
    );
    sortedGroups.push(filteredgroup);
  }

  sortedGroups.forEach((group) => {
    if (group.every((subgroup) => subgroup.status == "ok")) passed++;
  });

  result = Math.floor((passed * 100) / sortedGroups.length);

  return result;
}

solution(
  ["test1a", "test2", "test1b", "test1c", "test3"],
  ["Wrong answer", "OK", "Runtime error", "OK", "Time limit exceeded"]
);
