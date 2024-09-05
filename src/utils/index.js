export const paginationPipeline = (page, limit) => {
  return [
    {
      $facet: {
        paginationInfo: [
          { $count: 'totalDocuments' },
          {
            $addFields: {
              totalDocuments: { $ifNull: ['$totalDocuments', 0] },
              totalPages: {
                $ceil: {
                  $divide: [
                    { $ifNull: ['$totalDocuments', 1] },
                    parseInt(limit, 10),
                  ],
                },
              },
            },
          },
          {
            $project: {
              totalDocuments: 1,
              totalPages: 1,
            },
          },
        ],
        results: [
          { $skip: (parseInt(page, 10) - 1) * parseInt(limit, 10) },
          { $limit: parseInt(limit, 10) },
        ],
      },
    },
    {
      $unwind: { path: '$paginationInfo', preserveNullAndEmptyArrays: true },
    },
    {
      $project: {
        totalDocuments: { $ifNull: ['$paginationInfo.totalDocuments', 0] },
        totalPages: { $ifNull: ['$paginationInfo.totalPages', 0] },
        data: '$results',
      },
    },
  ];
};
