import React from "react";
import { useStats } from "src/core/StashService";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { LoadingIndicator } from "src/components/Shared";
import Changelog from "src/components/Changelog/Changelog";
import { TextUtils } from "src/utils";

export const Stats: React.FC = () => {
  const { data, error, loading } = useStats();

  if (error) return <span>{error.message}</span>;
  if (loading || !data) return <LoadingIndicator />;

  const scenesSize = TextUtils.fileSize(data.stats.scenes_size);
  const imagesSize = TextUtils.fileSize(data.stats.images_size);

  const scenesDuration = TextUtils.secondsAsTimeString(
    data.stats.scenes_duration,
    3
  );

  return (
    <div className="mt-5">
      <div className="col col-sm-8 m-sm-auto row stats">
        <div className="stats-element">
          <p className="title">
            <FormattedNumber
              value={scenesSize.size}
              maximumFractionDigits={TextUtils.fileSizeFractionalDigits(
                scenesSize.unit
              )}
            />
            {` ${TextUtils.formatFileSizeUnit(scenesSize.unit)}`}
          </p>
          <p className="heading">
            <FormattedMessage id="stats.scenes_size" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.scene_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="scenes" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.movie_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="movies" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">{scenesDuration || "-"}</p>
          <p className="heading">
            <FormattedMessage id="stats.scenes_duration" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.performer_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="performers" />
          </p>
        </div>
      </div>
      <div className="col col-sm-8 m-sm-auto row stats">
        <div className="stats-element">
          <p className="title">
            <FormattedNumber
              value={imagesSize.size}
              maximumFractionDigits={TextUtils.fileSizeFractionalDigits(
                imagesSize.unit
              )}
            />
            {` ${TextUtils.formatFileSizeUnit(imagesSize.unit)}`}
          </p>
          <p className="heading">
            <FormattedMessage id="stats.image_size" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.gallery_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="galleries" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.image_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="images" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.studio_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="studios" />
          </p>
        </div>
        <div className="stats-element">
          <p className="title">
            <FormattedNumber value={data.stats.tag_count} />
          </p>
          <p className="heading">
            <FormattedMessage id="tags" />
          </p>
        </div>
      </div>
      <div className="changelog col col-sm-8 mx-sm-auto">
        <Changelog />
      </div>
    </div>
  );
};
