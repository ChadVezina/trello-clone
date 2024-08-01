import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { MAX_FREE_BOARDS } from "@/constants/boards";

export const incrementAvailableCount = async () => {
  const { orgId, userId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  const orgLimit = await db.orgLimit.findUnique({
    where: {
      orgId: userId,
    },
  });

  if (orgLimit) {
    await db.orgLimit.update({
      where: {
        orgId: userId,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });
  } else {
    await db.orgLimit.create({
      data: {
        orgId: userId,
        count: 1,
      },
    });
  }
};

export const decrementAvailableCount = async () => {
  const { orgId, userId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  const orgLimit = await db.orgLimit.findUnique({
    where: {
      orgId: userId,
    },
  });

  if (orgLimit) {
    if (orgLimit.count !== 0) {
      await db.orgLimit.update({
        where: {
          orgId: userId,
        },
        data: {
          count: {
            decrement: 1,
          },
        },
      });
    }
  } else {
    await db.orgLimit.create({
      data: {
        orgId: userId,
        count: 1,
      },
    });
  }
};

export const hasAvailableCount = async () => {
  const { orgId, userId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  const orgLimit = await db.orgLimit.findUnique({
    where: {
      orgId: userId,
    },
  });

  if (!orgLimit || orgLimit.count < MAX_FREE_BOARDS) {
    return true;
  } else {
    return false;
  }
};

export const getAvailableCount = async () => {
  const { orgId, userId } = auth();

  if (!orgId) {
    return 0;
  }

  const orgLimit = await db.orgLimit.findUnique({
    where: {
      orgId: userId,
    },
  });

  if (!orgLimit) {
    return 0;
  }
  return orgLimit.count;
};

export const hasAvailableCountEdit = async () => {
  const { orgId, userId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  const orgLimit = await db.orgLimit.findUnique({
    where: {
      orgId: userId,
    },
  });

  if (!orgLimit || orgLimit.count <= MAX_FREE_BOARDS) {
    return true;
  } else {
    return false;
  }
};
